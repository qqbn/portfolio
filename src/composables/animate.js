import anime from "animejs";

export function pageAnimation(element) {
    anime({
        targets: element,
        scale: [
            {value: 1, easing: "linear", duration: 1000},
            {value: 0, easing: "linear", duration: 500},
        ],
        delay: anime.stagger(200, {grid: [4, 3], from: "center"}),
        loop: 1,
    });
    return true;
}
