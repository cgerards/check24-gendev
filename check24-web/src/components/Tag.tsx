"use client";

interface TagProps {
  text: string;
  color: "green" | "blue" | "red" | "yellow";
}

export default function Tag({ text, color }: TagProps) {
  let bgColor = "";
  let textColor = "";

  switch (color) {
    case "green":
      bgColor = "bg-emerald-300/50";
      textColor = "text-emerald-700";
      break;

    case "blue":
      bgColor = "bg-sky-300/75";
      textColor = "text-sky-600";
      break;

    case "red":
      bgColor = "bg-red-300";
      textColor = "text-red-900";
      break;
    case "yellow":
      bgColor = "bg-amber-200";
      textColor = "text-yellow-600";
      break;
    default:
      bgColor = "bg-amber-500";
  }

  return (
    <div
      className={`outline-1 rounded-xs p-0.5 pl-1.5 pr-1.5 text-xs font-rubik ${textColor} ${bgColor}`}
    >
      {text}
    </div>
  );
}
