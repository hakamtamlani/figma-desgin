import { FaReact, FaLaravel } from "react-icons/fa";
import {
  SiAngular,
  SiExpress,
  SiFlutter,
  SiPython,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const data = [
  {
    img: <FaReact />,
    title: "React",
    subtitle: "JavaScript Library",
    tech: "Front-End",
    tech1: "Web Development",
    tech2: "Component-Based",
    tech3: "Virtual DOM",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
  },
  {
    img: <FaLaravel />,
    title: "Laravel",
    subtitle: "PHP Framework",
    tech: "Backend",
    tech1: "Web Development",
    tech2: "MVC",
    tech3: "Artisan CLI",
    description:
      "Laravel is a PHP framework designed for web application development. It follows the MVC architectural pattern and provides an elegant syntax, making it easy to build robust and scalable applications. Laravel includes features like Eloquent ORM, Blade templating, and built-in authentication and authorization.",
  },
  {
    img: <SiTypescript />,
    title: "TypeScript",
    subtitle: "JavaScript with Types",
    tech: "Front-End",
    tech1: "Web Development",
    tech2: "Type Safety",
    tech3: "Static Typing",
    description:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. TypeScript adds static types to JavaScript to help reduce bugs and make it easier to maintain large codebases. It is developed and maintained by Microsoft.",
  },
  {
    img: <SiAngular />,
    title: "Angular",
    subtitle: "Framework",
    tech: "Front-End",
    tech1: "Web Development",
    tech2: "Single Page Applications",
    tech3: "Component-Based",
    description:
      "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. It is led by the Angular Team at Google and by a community of individuals and corporations. Angular combines declarative templates, dependency injection, end-to-end tooling, and integrated best practices to solve development challenges.",
  },
  {
    img: <TbBrandReactNative />,
    title: "React Native",
    subtitle: "Mobile Framework",
    tech: "Cross-Platform",
    tech1: "JavaScript",
    tech2: "Native Development",
    tech3: "Mobile App",
    description:
      "React Native is a framework developed by Facebook for building native mobile applications using JavaScript and React. It enables developers to write code once and deploy it on both iOS and Android platforms, resulting in significant time and cost savings. React Native leverages native components and APIs to achieve high performance and deliver native-like user experiences.",
  },
  {
    img: <SiPython />,
    title: "Python",
    subtitle: "Programming Language",
    tech: "General-Purpose",
    tech1: "Web Development",
    tech2: "Flask Microframework",
    tech3: "Data Analysis ",
    description:
      "Python is a versatile and powerful programming language known for its readability and simplicity. It supports multiple programming paradigms and is widely used in various domains, including web development, scientific computing, and automation. Flask, a micro web framework written in Python, exemplifies Python's flexibility and ease of integration with other libraries. It is particularly suitable for developing small to medium-sized web applications and APIs.",
  },

  {
    img: <SiFlutter />,
    title: "Flutter",
    subtitle: "UI Toolkit",
    tech: "Cross-Platform",
    tech1: "Dart",
    tech2: "Widgets",
    tech3: "Hot Reload",
    description:
      "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses Dart, a modern language developed by Google, and provides a rich set of pre-designed widgets implementing Material Design and Cupertino (iOS-style) widgets for beautiful, responsive applications.",
  },
  {
    img: <SiExpress />,
    title: "Express.js",
    subtitle: "Node.js Framework",
    tech: "Back-End",
    tech1: "Web Development",
    tech2: "RESTful APIs",
    tech3: "Middleware and Routing",
    description:
      "Express.js is a minimalist web framework for Node.js, designed for building web applications and APIs. It is known for its simplicity, flexibility, and robust performance. Express.js facilitates rapid development and scalability through middleware and routing mechanisms.",
  },
];
