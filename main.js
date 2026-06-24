const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");
const navLinks = [...document.querySelectorAll(".nav-link")];
const terminalSubmit = document.querySelector("#terminal-submit");
const terminalStatus = document.querySelector("#terminal-status");
const terminalInput = document.querySelector("#terminal-input");
const codeMount = document.querySelector("#code-highlight-mount code");
const codePreview = document.querySelector("#code-highlight-mount");
const heroHotspots = [
  ...document.querySelectorAll(".hero-hotspot, .hero-cta-hotspot")
];
const siteHeader = document.querySelector("#site-header");
const homeSection = document.querySelector("#home");
const liquidEtherRoot = document.querySelector("#liquid-ether-root");
const projectDetail = document.querySelector("#project-detail");
const projectGallery = document.querySelector("[data-project-gallery]");
const projectKicker = document.querySelector("[data-project-kicker]");
const projectTitle = document.querySelector("[data-project-title]");
const projectSummary = document.querySelector("[data-project-summary]");
const projectBack = document.querySelector("[data-project-back]");
const imageModal = document.querySelector("#image-modal");
const modalImage = document.querySelector("[data-modal-image]");
const modalVideo = document.querySelector("[data-modal-video]");
const modalClose = document.querySelector("[data-modal-close]");

const imageFilePattern = /\.(avif|gif|jpe?g|png|webp)$/i;
const videoFilePattern = /\.mp4$/i;
const assetFilePattern = /\.(avif|gif|jpe?g|mp4|png|webp)$/i;
const posterExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

const projects = [
  {
    id: 1,
    route: "/project1",
    kicker: "PROJECT 01",
    title: "成衣原创设计",
    summary:
      "围绕成衣结构、制版逻辑、廓形比例与系列化视觉展开，适合展示原创服装设计、过程稿与成衣细节。",
    folder: "/public/images/portfolio/proj1/"
  },
  {
    id: 2,
    route: "/project2",
    kicker: "PROJECT 02",
    title: "虚拟数字服饰",
    summary:
      "聚焦数字成衣、虚拟面料、3D服装呈现与未来科技风格，可继续扩展建模过程与渲染成果。",
    folder: "/public/images/portfolio/proj2/"
  },
  {
    id: 3,
    route: "/project3",
    kicker: "PROJECT 03",
    title: "品牌平面视觉",
    summary:
      "用于呈现服饰品牌海报、视觉系统、版式设计与传播物料，保持深色科技与时尚行业气质统一。",
    folder: "/public/images/portfolio/proj3/"
  },
  {
    id: 4,
    route: "/project4",
    kicker: "PROJECT 04",
    title: "AI智能设计案例",
    summary:
      "记录 AI Prompt、Codex 脚本、版型参数与数字化设计流程，体现从创意到自动化执行的完整链路。",
    folder: "/public/images/portfolio/proj4/"
  }
];

function loadEnhancementBundle() {
  if (document.querySelector('script[data-enhancement-bundle="liquid-ether"]')) {
    return;
  }

  const script = document.createElement("script");
  script.src = "/liquid-ether.js";
  script.defer = true;
  script.dataset.enhancementBundle = "liquid-ether";
  script.onerror = () => {
    console.warn("liquid-ether.js failed to load; core portfolio remains usable.");
  };
  document.body.appendChild(script);
}

function scheduleEnhancementBundle() {
  const load = () => loadEnhancementBundle();
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(load, { timeout: 1800 });
  } else {
    window.setTimeout(load, 900);
  }
}

let terminalTimer = null;
let typewriterTimer = null;
let galleryRenderToken = 0;
let headerScrollFrame = null;
let revealScrollFrame = null;
let etherPointerFrame = null;
let etherPointerTarget = { x: 0, y: 0 };
let etherPointerCurrent = { x: 0, y: 0 };

class HeroCharacter {
  constructor(root) {
    this.root = root;
    this.hero = root?.closest(".hero-artboard");
    this.hud = this.hero?.querySelector(".hero-hud-parallax");
    this.purpleGlow = root?.querySelector(".hero-character-glow-purple");
    this.cyanGlow = root?.querySelector(".hero-character-glow-cyan");
    this.reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.pointerCapable = window.matchMedia("(hover: hover) and (pointer: fine)");
    this.target = { rotateX: 0, rotateY: 0, x: 0, y: 0, hudX: 0, hudY: 0 };
    this.current = { ...this.target };
    this.frame = null;

    if (!this.root || !this.hero) return;

    this.handlePointerMove = this.handlePointerMove.bind(this);
    this.handlePointerLeave = this.handlePointerLeave.bind(this);
    this.render = this.render.bind(this);
    this.handlePreferenceChange = this.handlePreferenceChange.bind(this);

    this.hero.addEventListener("pointermove", this.handlePointerMove);
    this.hero.addEventListener("pointerleave", this.handlePointerLeave);
    this.reduceMotion.addEventListener("change", this.handlePreferenceChange);
    this.pointerCapable.addEventListener("change", this.handlePreferenceChange);
    this.frame = window.requestAnimationFrame(this.render);
  }

  handlePointerMove(event) {
    if (this.reduceMotion.matches || !this.pointerCapable.matches) return;

    const rect = this.hero.getBoundingClientRect();
    const normalizedX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const normalizedY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    const x = Math.max(-1, Math.min(1, normalizedX));
    const y = Math.max(-1, Math.min(1, normalizedY));

    this.target.rotateY = x * 7;
    this.target.rotateX = y * -4;
    this.target.x = x * 9;
    this.target.y = y * 7;
    this.target.hudX = x * -3;
    this.target.hudY = y * -2;
  }

  handlePointerLeave() {
    Object.keys(this.target).forEach((key) => {
      this.target[key] = 0;
    });
  }

  handlePreferenceChange() {
    this.handlePointerLeave();
    if (this.reduceMotion.matches) {
      this.root.style.transform = "none";
      this.hud.style.transform = "none";
      this.purpleGlow.style.transform = "none";
      this.cyanGlow.style.transform = "none";
    }
  }

  render() {
    if (!this.reduceMotion.matches && this.pointerCapable.matches) {
      Object.keys(this.current).forEach((key) => {
        this.current[key] += (this.target[key] - this.current[key]) * 0.075;
      });

      const { rotateX, rotateY, x, y, hudX, hudY } = this.current;
      this.root.style.transform =
        `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) ` +
        `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      this.hud.style.transform =
        `translate3d(${hudX.toFixed(2)}px, ${hudY.toFixed(2)}px, 0)`;
      this.purpleGlow.style.transform =
        `translate3d(${(x * 0.42 + 4).toFixed(2)}px, ${(y * 0.3 + 1).toFixed(2)}px, 0)`;
      this.cyanGlow.style.transform =
        `translate3d(${(x * -0.32 - 3).toFixed(2)}px, ${(y * -0.24 - 1).toFixed(2)}px, 0)`;
    }

    this.frame = window.requestAnimationFrame(this.render);
  }

  destroy() {
    window.cancelAnimationFrame(this.frame);
    this.hero.removeEventListener("pointermove", this.handlePointerMove);
    this.hero.removeEventListener("pointerleave", this.handlePointerLeave);
    this.reduceMotion.removeEventListener("change", this.handlePreferenceChange);
    this.pointerCapable.removeEventListener("change", this.handlePreferenceChange);
  }
}

const heroCharacter = new HeroCharacter(
  document.querySelector("#hero-character")
);

function updateFloatingHeader() {
  if (!siteHeader || !homeSection) return;
  if (document.body.classList.contains("project-route")) {
    siteHeader.classList.add("is-visible");
    return;
  }
  const threshold = Math.max(0, homeSection.offsetHeight - 1);
  siteHeader.classList.toggle("is-visible", window.scrollY >= threshold);
}

function scheduleFloatingHeaderUpdate() {
  if (headerScrollFrame) return;
  headerScrollFrame = window.requestAnimationFrame(() => {
    headerScrollFrame = null;
    updateFloatingHeader();
  });
}

window.addEventListener("scroll", scheduleFloatingHeaderUpdate, { passive: true });
window.addEventListener("resize", scheduleFloatingHeaderUpdate);
updateFloatingHeader();

const scrollRevealItems = [...document.querySelectorAll("[data-scroll-reveal]")];
const reduceRevealMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function splitScrollRevealText(item) {
  const textNode = item.querySelector("[data-scroll-reveal-text]");
  if (!textNode || item.dataset.scrollRevealReady === "true") return;

  const source = textNode.innerHTML.trim();
  const placeholder = document.createElement("template");
  placeholder.innerHTML = source;
  const parts = [];

  placeholder.content.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      Array.from(node.textContent || "").forEach((char) => {
        parts.push({ char, highlight: false });
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      Array.from(node.textContent || "").forEach((char) => {
        parts.push({ char, highlight: node.classList.contains("scroll-reveal-highlight") });
      });
    }
  });

  textNode.innerHTML = parts
    .map(({ char, highlight }, index) => {
      if (char === " ") return " ";
      const safeChar = char
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      const classes = highlight
        ? "scroll-reveal-word scroll-reveal-highlight"
        : "scroll-reveal-word";
      return `<span class="${classes}" style="--word-index:${index}">${safeChar}</span>`;
    })
    .join("");

  item.dataset.scrollRevealReady = "true";
}

function updateScrollReveal() {
  if (!scrollRevealItems.length) return;

  if (reduceRevealMotion.matches) {
    scrollRevealItems.forEach((item) => {
      item.style.transform = "none";
      item.querySelectorAll(".scroll-reveal-word").forEach((word) => {
        word.style.setProperty("opacity", "1", "important");
        word.style.setProperty("filter", "blur(0px)", "important");
        word.style.setProperty("transform", "translateY(0px)", "important");
      });
    });
    return;
  }

  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  scrollRevealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const start = viewportHeight * 0.9;
    const end = viewportHeight * 0.24;
    const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
    const baseRotation = Number(item.dataset.baseRotation || 3);
    const blurStrength = Number(item.dataset.blurStrength || 8);

    item.style.transform = `rotate(${((1 - progress) * baseRotation).toFixed(3)}deg)`;

    const words = [...item.querySelectorAll(".scroll-reveal-word")];
    const count = Math.max(words.length, 1);
    words.forEach((word, index) => {
      const delay = index / count * 0.58;
      const wordProgress = Math.max(0, Math.min(1, (progress - delay) / 0.42));
      const eased = 1 - Math.pow(1 - wordProgress, 3);
      word.style.setProperty("opacity", (0.12 + eased * 0.88).toFixed(3), "important");
      word.style.setProperty("filter", `blur(${((1 - eased) * blurStrength).toFixed(2)}px)`, "important");
      word.style.setProperty("transform", `translateY(${((1 - eased) * 14).toFixed(2)}px)`, "important");
    });
  });
}

function scheduleScrollRevealUpdate() {
  if (revealScrollFrame) return;
  revealScrollFrame = window.requestAnimationFrame(() => {
    revealScrollFrame = null;
    updateScrollReveal();
  });
}

scrollRevealItems.forEach(splitScrollRevealText);
window.addEventListener("scroll", scheduleScrollRevealUpdate, { passive: true });
window.addEventListener("resize", scheduleScrollRevealUpdate);
window.addEventListener("load", scheduleScrollRevealUpdate);
window.addEventListener("hashchange", scheduleScrollRevealUpdate);
reduceRevealMotion.addEventListener("change", updateScrollReveal);
updateScrollReveal();
window.setTimeout(updateScrollReveal, 0);
window.setTimeout(scheduleScrollRevealUpdate, 120);
window.setTimeout(scheduleScrollRevealUpdate, 450);
window.setTimeout(scheduleScrollRevealUpdate, 900);

function renderEtherPointer() {
  etherPointerCurrent.x +=
    (etherPointerTarget.x - etherPointerCurrent.x) * 0.055;
  etherPointerCurrent.y +=
    (etherPointerTarget.y - etherPointerCurrent.y) * 0.055;

  liquidEtherRoot?.style.setProperty(
    "--ether-x",
    `${etherPointerCurrent.x.toFixed(2)}px`
  );
  liquidEtherRoot?.style.setProperty(
    "--ether-y",
    `${etherPointerCurrent.y.toFixed(2)}px`
  );

  etherPointerFrame = window.requestAnimationFrame(renderEtherPointer);
}

if (
  liquidEtherRoot &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  window.addEventListener(
    "pointermove",
    (event) => {
      etherPointerTarget.x = (event.clientX / window.innerWidth - 0.5) * 26;
      etherPointerTarget.y = (event.clientY / window.innerHeight - 0.5) * 18;
    },
    { passive: true }
  );
  etherPointerFrame = window.requestAnimationFrame(renderEtherPointer);
}

menuToggle?.addEventListener("click", () => {
  const isOpen = !navMenu.classList.contains("hidden");
  navMenu.classList.toggle("hidden", isOpen);
  navMenu.classList.toggle("flex", !isOpen);
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (href?.startsWith("#") && document.body.classList.contains("project-route")) {
      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        closeProjectRoute(false);
        window.history.pushState(null, "", href);
        window.requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }

    navLinks.forEach((item) => item.classList.remove("is-active"));
    link.classList.add("is-active");

    if (window.innerWidth < 768) {
      navMenu.classList.add("hidden");
      navMenu.classList.remove("flex");
      menuToggle?.setAttribute("aria-expanded", "false");
    }
  });
});

heroHotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", (event) => {
    const target = document.querySelector(hotspot.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    closeProjectRoute(false);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", hotspot.getAttribute("href"));
  });
});

function getProjectByRoute(pathname) {
  const normalizedPath = pathname.replace(/\/$/, "");
  return projects.find((project) => project.route === normalizedPath);
}

function getProjectById(id) {
  return projects.find((project) => String(project.id) === String(id));
}

function getAssetType(path) {
  if (imageFilePattern.test(path)) return "image";
  if (videoFilePattern.test(path)) return "video";
  return "unknown";
}

function uniqueAssetPaths(paths) {
  const seen = new Set();
  return paths.filter((path) => {
    const key = decodeURIComponent(path).toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function sortAssetPaths(paths) {
  return [...paths].sort((a, b) =>
    decodeURIComponent(a).localeCompare(decodeURIComponent(b), "zh-CN", {
      numeric: true,
      sensitivity: "base"
    })
  );
}

function findVideoPoster(videoPath, allPaths) {
  const basePath = videoPath.replace(/\.[^.]+$/, "");
  const normalizedPaths = new Map(
    allPaths.map((path) => [decodeURIComponent(path).toLowerCase(), path])
  );

  for (const extension of posterExtensions) {
    const poster = normalizedPaths.get(
      decodeURIComponent(`${basePath}${extension}`).toLowerCase()
    );
    if (poster) return poster;
  }

  return "";
}

async function loadProjectAssets(folder) {
  const folderUrl = new URL(folder, window.location.origin);
  const response = await fetch(folderUrl.pathname, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Cannot read asset folder: ${folderUrl.pathname}`);
  }

  const html = await response.text();
  const directory = new DOMParser().parseFromString(html, "text/html");
  const assetPaths = [...directory.querySelectorAll("a")]
    .map((anchor) => anchor.getAttribute("href"))
    .filter(Boolean)
    .map((href) => new URL(href, response.url))
    .filter((url) => url.pathname.startsWith(folderUrl.pathname))
    .map((url) => url.pathname)
    .filter((pathname) => assetFilePattern.test(pathname));

  const paths = sortAssetPaths(uniqueAssetPaths(assetPaths));
  return paths.map((path) => ({
    src: path,
    type: getAssetType(path),
    poster: videoFilePattern.test(path) ? findVideoPoster(path, paths) : ""
  }));
}

function renderProjectGallery(project, assets) {
  if (!projectGallery) return;

  if (!assets.length) {
    projectGallery.innerHTML = `
      <div class="border border-line bg-panel p-8 text-sm leading-7 text-slate-400 sm:col-span-2 xl:col-span-3">
        当前项目文件夹暂无可展示素材。请将 jpg / png 图片或 mp4 视频放入 ${project.folder}
      </div>
    `;
    return;
  }

  projectGallery.innerHTML = assets
    .map((asset, index) => {
      const label = `${project.title} 画廊素材 ${index + 1}`;

      if (asset.type === "video") {
        const posterMarkup = asset.poster
          ? `<img src="${asset.poster}" alt="${label} 视频缩略图" loading="lazy" decoding="async" />`
          : `<div class="gallery-video-placeholder" aria-hidden="true">
              <span>MP4</span>
              <strong>${decodeURIComponent(asset.src.split("/").pop() || "VIDEO")}</strong>
            </div>`;

        return `
          <button
            class="project-gallery-item"
            type="button"
            data-gallery-type="video"
            data-gallery-src="${asset.src}"
            data-gallery-alt="${label}"
            aria-label="播放 ${label}"
          >
            ${posterMarkup}
            <span class="gallery-play-badge" aria-hidden="true"></span>
          </button>
        `;
      }

      return `
        <button
          class="project-gallery-item"
          type="button"
          data-gallery-type="image"
          data-gallery-src="${asset.src}"
          data-gallery-alt="${label}"
          aria-label="预览 ${label}"
        >
          <img src="${asset.src}" alt="${label}" loading="lazy" decoding="async" />
        </button>
      `;
    })
    .join("");
}

async function openProject(project, push = true) {
  if (!project || !projectDetail) return;
  const token = (galleryRenderToken += 1);

  projectKicker.textContent = project.kicker;
  projectTitle.textContent = project.title;
  projectSummary.textContent = project.summary;
  if (projectGallery) {
    projectGallery.innerHTML = `
      <div class="border border-line bg-panel p-8 text-sm leading-7 text-slate-400 sm:col-span-2 xl:col-span-3">
        正在读取 ${project.folder} 内的作品图片...
      </div>
    `;
  }

  document.body.classList.add("project-route");
  projectDetail.classList.remove("hidden");
  updateFloatingHeader();

  if (push) {
    window.history.pushState({ projectId: project.id }, "", project.route);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });

  try {
    const assets = await loadProjectAssets(project.folder);
    if (token === galleryRenderToken) {
      renderProjectGallery(project, assets);
    }
  } catch (error) {
    if (token === galleryRenderToken && projectGallery) {
      projectGallery.innerHTML = `
        <div class="border border-line bg-panel p-8 text-sm leading-7 text-slate-400 sm:col-span-2 xl:col-span-3">
          素材目录读取失败，请确认 ${project.folder} 存在并可访问。
        </div>
      `;
    }
    console.error(error);
  }
}

function closeProjectRoute(push = true) {
  galleryRenderToken += 1;
  document.body.classList.remove("project-route");
  projectDetail?.classList.add("hidden");
  if (push) {
    window.history.pushState(null, "", "/#portfolio");
  }
  updateFloatingHeader();
}

document.querySelectorAll("[data-project-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const project = getProjectById(link.dataset.projectLink);
    if (!project) return;
    event.preventDefault();
    openProject(project);
  });
});

projectBack?.addEventListener("click", () => {
  closeProjectRoute();
  window.requestAnimationFrame(() => {
    document.querySelector("#portfolio")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

projectGallery?.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-gallery-src]");
  if (!trigger || !imageModal || !modalImage || !modalVideo) return;

  const type = trigger.dataset.galleryType || "image";
  const src = trigger.dataset.gallerySrc;
  const alt = trigger.dataset.galleryAlt || "作品素材预览";

  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.load();
  modalVideo.classList.add("hidden");
  modalImage.removeAttribute("src");
  modalImage.classList.add("hidden");

  if (type === "video") {
    modalVideo.src = src;
    modalVideo.classList.remove("hidden");
    modalVideo.load();
    modalVideo.play().catch(() => {});
  } else {
    modalImage.src = src;
    modalImage.alt = alt;
    modalImage.classList.remove("hidden");
  }

  imageModal.classList.add("is-open");
  imageModal.setAttribute("aria-hidden", "false");
});

function closeImageModal() {
  if (!imageModal || !modalImage || !modalVideo) return;
  imageModal.classList.remove("is-open");
  imageModal.setAttribute("aria-hidden", "true");
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.load();
  modalVideo.classList.add("hidden");
  modalImage.removeAttribute("src");
  modalImage.classList.add("hidden");
}

modalClose?.addEventListener("click", closeImageModal);
imageModal?.addEventListener("click", (event) => {
  if (event.target === imageModal) closeImageModal();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeImageModal();
});

window.addEventListener("popstate", () => {
  const project = getProjectByRoute(window.location.pathname);
  if (project) {
    openProject(project, false);
  } else {
    closeProjectRoute(false);
  }
});

const pendingProjectRoute = window.sessionStorage.getItem("pendingProjectRoute");
if (pendingProjectRoute) {
  window.sessionStorage.removeItem("pendingProjectRoute");
  window.history.replaceState(null, "", pendingProjectRoute);
}

const initialProject = getProjectByRoute(window.location.pathname);
if (initialProject) {
  openProject(initialProject, false);
}

function stopTerminalTimers() {
  window.clearTimeout(terminalTimer);
  window.clearInterval(typewriterTimer);
}

function buildFashionDesignResult(request) {
  return `// 数字化设计生成结果
// 用户需求：${request}

版型结构：采用贴合男装人体工学的机能风羽绒服结构，强化肩部活动量、立体袖型与分区充绒剪裁，兼顾保暖性和利落廓形。
面料搭配：推荐防风防泼水尼龙表层、轻量高密胆布与耐磨机能拼接面料，适配通勤、户外及冬季城市穿着场景。
数字化优化：通过 Codex 进行版型参数适配、尺寸规则整理与裁片数据校验，并预留虚拟成衣建模兼容参数。
配套延伸：可继续拓展系列印花、服饰吊牌、包装系统、品牌 LOGO 与社交媒体平面视觉方案。`;
}

function typeResult(text) {
  let index = 0;
  codeMount.textContent = "";

  typewriterTimer = window.setInterval(() => {
    codeMount.textContent += text[index];
    index += 1;
    codePreview.scrollTop = codePreview.scrollHeight;

    if (index >= text.length) {
      window.clearInterval(typewriterTimer);
      codePreview.classList.remove("terminal-preview-complete");
      void codePreview.offsetWidth;
      codePreview.classList.add("terminal-preview-complete");
    }
  }, 18);
}

terminalSubmit?.addEventListener("click", () => {
  const value = terminalInput.value.trim();

  if (!value) {
    window.alert("请输入服装版型、面料设计、平面视觉创作需求");
    terminalInput.focus();
    return;
  }

  stopTerminalTimers();
  terminalStatus.textContent = "LOADING";
  terminalSubmit.disabled = true;
  terminalSubmit.classList.add("terminal-button-loading");
  codePreview.classList.remove("terminal-preview-complete");
  codeMount.textContent = "// 正在解析设计需求并生成数字化方案...";

  terminalTimer = window.setTimeout(() => {
    terminalStatus.textContent = "READY";
    terminalSubmit.disabled = false;
    terminalSubmit.classList.remove("terminal-button-loading");
    typeResult(buildFashionDesignResult(value));
  }, 2500);
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
scheduleEnhancementBundle();

/*
 * 【后续 OpenAI API 扩展位】
 * 可将 buildFashionDesignResult() 替换为 fetch 请求，把用户输入发送至
 * OpenAI Responses API，并将返回文本继续交给 typeResult() 渲染。
 * 当前版本不包含后端、密钥或任何网络请求，可在浏览器离线运行。
 */
