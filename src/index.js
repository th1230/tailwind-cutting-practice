import "./index.css";

// ------------------panel 控置設定 ------------------

const plusBtn = document.getElementById("plus-btn");
const msgBtn = document.getElementById("msg-btn");
const bellBtn = document.getElementById("bell-btn");
const downBtn = document.getElementById("down-btn");

const plusPanel = document.getElementById("plus-panel");
const msgPanel = document.getElementById("msg-panel");
const bellPanel = document.getElementById("bell-panel");
const downPanel = document.getElementById("down-panel");

const btns = [plusBtn, msgBtn, bellBtn, downBtn];
const panels = [plusPanel, msgPanel, bellPanel, downPanel];

window.addEventListener("click", () => {
  panels.forEach((p) => {
    if (!p.classList.contains("hidden")) {
      p.classList.add("hidden");
    }
  });
});

panels.forEach((p) => {
  p.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

btns.forEach((b, index) => {
  b.addEventListener("click", (e) => {
    e.stopPropagation();
    togglePanel(index);
  });
});

function togglePanel(index) {
  panels.forEach((p, idx) => {
    if (idx == index) {
      if (panels[idx].classList.contains("hidden")) {
        panels[idx].classList.remove("hidden");
      } else {
        panels[idx].classList.add("hidden");
      }
    } else {
      if (panels[idx].classList.contains("hidden")) {
        return;
      } else {
        panels[idx].classList.add("hidden");
      }
    }
  });
}

// ------------------render 左側資訊欄 ------------------
const dataArr = [
  { img: "https://bruce-fe-fb.web.app/image/avator.png", text: "Thomas" },
  {
    img: "https://bruce-fe-fb.web.app/image/left/activity.svg",
    text: "活動",
  },
  { img: "https://bruce-fe-fb.web.app/image/left/cloudy.png", text: "天氣" },
  {
    img: "https://bruce-fe-fb.web.app/image/left/dynamic.svg",
    text: "災害應變中心",
  },
  {
    img: "https://bruce-fe-fb.web.app/image/left/facemask.svg",
    text: "新冠病毒資訊中心",
  },
  { img: "https://bruce-fe-fb.web.app/image/left/friend.svg", text: "社團" },
  {
    img: "https://bruce-fe-fb.web.app/image/left/job.png",
    text: "企業管理平台",
  },
  {
    img: "https://bruce-fe-fb.web.app/image/left/messenger.svg",
    text: "Messenger",
  },
  {
    img: "https://bruce-fe-fb.web.app/image/left/pay.png",
    text: "近期廣告動態",
  },
  {
    img: "https://bruce-fe-fb.web.app/image/left/sale.png",
    text: "朋友名單",
  },
  { img: "https://bruce-fe-fb.web.app/image/left/star.svg", text: "最愛" },
  {
    img: "https://bruce-fe-fb.web.app/image/left/store.svg",
    text: "Marketplace",
  },
  {
    img: "https://bruce-fe-fb.web.app/image/left/watchingTv.svg",
    text: "Watch",
  },
];

function renderLeftBlock() {
  const leftBlock = document.getElementById("left-block");

  let html = "";

  for (let i = 0; i < dataArr.length; i++) {
    html = html + renderLeftItem(dataArr[i].img, dataArr[i].text);
  }

  leftBlock.innerHTML = html;
}

function renderLeftItem(img, text) {
  const itemHtml = `<div
  class="
    w-full
    flex
    items-center
    justify-items-center
    p-2
    mb-1
    cursor-pointer
    hover:bg-fb-input
    rounded
  ">
    <div class="w-[32px] overflow-hidden rounded-full mr-3">
        <img src="${img}" alt="" />
    </div>

    <p class="text-white text-[.9rem]">${text}</p>
  </div>`;

  return itemHtml;
}

renderLeftBlock();

// ------------------render 右側資訊欄 ------------------

function renderRightBlock() {
  const itemHtml = `<div
    class="
      w-full
      flex
      items-center
      justify-items-center
      py-2
      px-1
      rounded
      hover:bg-fb-input
      cursor-pointer
    "
  >
    <div class="w-[45px]">
      <div class="w-[32px] relative cursor-pointer">
        <div class="overflow-hidden rounded-full">
          <img
            src="https://bruce-fe-fb.web.app/image/avator.png"
            alt=""
          />
        </div>

        <div
          class="
            w-[8px]
            h-[8px]
            rounded-full
            bg-green-500
            absolute
            bottom-0
            right-0
            ring-gray-900
          "
        ></div>
      </div>
    </div>

    <p class="text-white text-[.9rem]">Thomas</p>
  </div>`;

  const rightBlock = document.getElementById("right-block");

  let html = `<p class="mb-2 text-lg text-gray-400">聯絡人</p>`;

  for (let i = 0; i < 7; i++) {
    html = html + itemHtml;
  }

  rightBlock.innerHTML = html;
}

renderRightBlock();

// ------------------render 限時動態資 ------------------

const storyList = document.getElementById("story-list");

function renderStoryItem() {
  for (let i = 0; i < 4; i++) {
    const divBox = document.createElement("div");
    divBox.classList.add(
      "flex-1",
      "px-[4px]",
      "min-w-[120px]",
      "cursor-pointer"
    );

    divBox.innerHTML = `
    <div class="relative overflow-hidden" id="story-${i}">
    <div id="story-mask-${i}" class="hidden absolute w-full h-full top-0 left-0 bg-black/20 z-20"></div>
    <div class="w-[32px] h-[32px] absolute top-4 left-4 ring-4 ring-fb bg-fb-card rounded-full flex justify-center items-center z-30">
      <p class="text-white text-sm">T</p>
    </div>
    <div class="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/30 to-transparent z-20"></div>
    <img id="story-image-${i}" class="w-full h-full duration-200" src="https://bruce-fe-fb.web.app/image/story.png" />
    <p class="absolute bottom-2 left-2 text-white">Thomas</p>
  </div>
    `;

    divBox.addEventListener("mouseover", function () {
      const mask = document.getElementById(`story-mask-${i}`);
      const image = document.getElementById(`story-image-${i}`);
      image.classList.add("scale-105");
      mask.classList.remove("hidden");
    });

    divBox.addEventListener("mouseout", function () {
      const mask = document.getElementById(`story-mask-${i}`);
      const image = document.getElementById(`story-image-${i}`);
      image.classList.remove("scale-105");
      mask.classList.add("hidden");
    });

    storyList.appendChild(divBox);
  }
}

renderStoryItem();

// ------------------render 輪播圖 ------------------

function renderLiveItem() {
  const swiperWrapper = document.getElementById("live-swiper");

  for (let i = 0; i < 20; i++) {
    const divBox = document.createElement("div");

    divBox.classList.add("swiper-slide");

    const item = ` <div class="w-[55px]">
  <div class="relative w-[40px] cursor-pointer">
    <div class="overflow-hidden rounded-full">
      <img
        src="https://bruce-fe-fb.web.app/image/avator.png"
        alt=""
      />
    </div>

    <div
      class="
        w-[10px]
        h-[10px]
        rounded-full
        bg-green-500
        absolute
        right-0
        bottom-0
        ring ring-gray-900
      "
    ></div>
  </div>
</div>`;

    divBox.innerHTML = item;

    swiperWrapper.appendChild(divBox);
  }
}
new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

renderLiveItem();
