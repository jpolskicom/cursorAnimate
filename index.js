  export function cursorAnimate(elem = null, speed = .2){
    if (elem) {
      if (typeof elem === 'string') {
        this.cursorAnimateItem = document.querySelector(elem);
      }else{
        this.cursorAnimateItem = elem;
      }
      if (this.cursorAnimateItem) {
        window.addEventListener('mousemove', (e) => {
          e = e || window.event;
          var pageX = e.pageX;
          var pageY = e.pageY;
          if (pageX === undefined) {
              pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
              pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
          }
          this.cursorAnimateItem.style.backgroundPosition = (parseFloat(pageX)*speed).toPrecision(2) + 'px ' + (parseFloat(pageY)*speed).toPrecision(2)+'px';
        });

      };
    };
};
