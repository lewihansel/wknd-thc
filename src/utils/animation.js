import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const slideDown = (node, delay) => {
  let tl = gsap.timeline({ delay: delay });
  tl.to(node, {
    duration: 2,
    opacity: 1,
    ease: "power3.out",
  }).from(
    node,
    {
      duration: 2.5,
      y: -100,
      ease: "power3.out",
    },
    0
  );
};

export const slideUpElastic = (node, delay) => {
  let tl = gsap.timeline({ delay: delay });
  tl.to(node, {
    duration: 3,
    opacity: 1,
    ease: "power3.out",
  }).from(
    node,
    {
      duration: 2.5,
      y: 500,
      ease: "elastic.out(0.8, 0.26)",
    },
    0
  );
};

export const fadeUpSlow = (node, delay) => {
  let tl = gsap.timeline({ delay: delay });
  tl.to(node, {
    duration: 1,
    opacity: 1,
    ease: "power3.out",
  }).from(
    node,
    {
      duration: 1,
      y: 30,
      ease: "power3.out",
    },
    0
  );
};

export const staggerReveal = (node, delay) => {
  const title = node;
  const subTitle = node.nextSibling;
  let tl = gsap.timeline({ delay: delay });
  tl.to([title, subTitle], {
    duration: 1.5,
    opacity: 1,
    stagger: 0.2,
    ease: "power3.out",
  }).from(
    [title, subTitle],
    {
      duration: 2,
      y: 50,
      stagger: 0.2,
      ease: "power3.out",
    },
    0
  );
};

export const slideLeft = (node, delay) => {
  let tl = gsap.timeline({
    delay: delay,
    scrollTrigger: {
      trigger: node,
      start: "top 30%",
    },
  });
  tl.to(node, {
    opacity: 1,
    duration: 0.1,
  }).from(node, {
    x: 160,
    duration: 3,
    ease: "slow(0.7, 0.7, false)",
  });
};

export const slideRight = (node, delay) => {
  let tl = gsap.timeline({
    delay: delay,
    scrollTrigger: {
      trigger: node,
      start: "top bottom",
    },
  });
  tl.to(node, {
    opacity: 1,
    duration: 0.1,
  }).from(node, {
    x: -260,
    y: 340,
    duration: 3,
    ease: "slow(0.7, 0.7, false)",
  });
};

export const onClickTransform = (e) => {
  const button = e.target;
  gsap.to(button, {
    duration: 0.1,
    scale: 0.9,
    ease: "power3.out",
    repeat: 1,
    yoyo: true,
  });
};
