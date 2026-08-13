import { FaCode, FaPaintBrush, FaVideo, FaTools, FaMusic } from "react-icons/fa";
import computerImg from "../assets/computer.jpg";
import designImg from "../assets/design.jpg";
import pianoImg from "../assets/piano.jpg";

export const skills = [
  {
    title: "Web Development",
    desc: "Building responsive, full-stack web apps with React, Django REST Framework, and modern JavaScript.",
    icon: FaCode,
    colorFrom: "#4338ca",
    colorTo: "#7c3aed",
    pattern: "grid",
  },
  {
    title: "Graphic Design",
    desc: "Creating branding, posters, and social media content using Adobe Photoshop and Inkscape.",
    icon: FaPaintBrush,
    image: designImg,
  },
  {
    title: "Video & Photo Editing",
    desc: "Editing promotional videos, reels, and event photography into polished final content.",
    icon: FaVideo,
    colorFrom: "#be185d",
    colorTo: "#831843",
    pattern: "dots",
  },
  {
    title: "Hardware & OS Maintenance",
    desc: "Diagnosing hardware issues, OS installation, system recovery, and data backups.",
    icon: FaTools,
    image: computerImg,
  },
  {
    title: "Piano & Music",
    desc: "Performing piano — a creative outlet that sharpens focus and discipline.",
    icon: FaMusic,
    image: pianoImg,
  },
];