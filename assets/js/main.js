// 通用JavaScript功能
document.addEventListener("DOMContentLoaded", function () {
  // 平滑滚动
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // 返回顶部功能
  const backToTop = document.createElement("button");
  backToTop.innerHTML = "↑";
  backToTop.className = "back-to-top";
  backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: #667eea;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: opacity 0.3s ease;
    `;

  document.body.appendChild(backToTop);

  // 显示/隐藏返回顶部按钮
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // 点击返回顶部
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 最后更新时间
  const lastUpdated = document.querySelector(".last-updated");
  if (lastUpdated) {
    lastUpdated.textContent = `最后更新：${new Date().toLocaleDateString("zh-CN")}`;
  }
});
