let elementSize = document.querySelector(".size");
let elemetType = document.querySelector(".element");
let form = document.querySelector("form");
let elementSelect = document.querySelector(".select");
let wrapper = document.querySelector("wrapper");

class Shape {
  constructor(options) {
    (this.element = document.createElement(elemetType.value)),
      (this.element.style.backgroundColor = colors[options.randomColor]);

    this.wrapper = document.querySelector(`.${options.holder}`);
    this.wrapper.append(this.element);
  }
}
class Square extends Shape {
  constructor(options) {
    super(options);

    this.element.style.height = options.size + "px";
    this.element.style.width = options.size + "px";
    this.element.style.borderRadius = options.round;
  }
}

class Round extends Shape {
  constructor(options) {
    super(options);

    this.element.style.height = options.size + "px";
    this.element.style.width = options.size + "px";
    this.element.style.borderRadius = options.round;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let key = localStorage.getItem("shape");

  if (key === "square") {
    new Square({
      randomColor: Math.ceil(Math.random() * colors.length) - 1,
      holder: "wrapper",
      size: elementSize.value,
      round: "0px",
      changeStyle() {
        this.element.style.borderRadius = "0px";
      },
    });
  } else if (key === "round") {
    new Round({
      randomColor: Math.ceil(Math.random() * colors.length) - 1,
      holder: "wrapper",
      size: elementSize.value,
      round: "50%",
      changeStyle() {
        this.element.style.borderRadius = "50%";
      },
    });
  }
  // elementSize.value = "";
});

elementSelect.addEventListener("change", () => {
  localStorage.setItem("shape", elementSelect.value);
});
