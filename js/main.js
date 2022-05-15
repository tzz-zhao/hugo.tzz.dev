(() => {
  // ns-hugo:/home/runner/work/tzz.dev/tzz.dev/assets/js/back-to-top.ts
  window.onscroll = function() {
    if (window.scrollY > 100) {
      document.getElementById("back-to-top").classList.remove("hidden");
    } else {
      document.getElementById("back-to-top").classList.add("hidden");
    }
  };
})();
