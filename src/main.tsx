import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GODAMMITKRISWHERETHEFUCKAREWE from "./GODDAMMITKRISWHERETHEFUCKAREWE";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GODAMMITKRISWHERETHEFUCKAREWE />
        <img
            src="https://www.demirramon.com/gen/undertale_text_box.png?text=GOD DAMMIT KRIS!&box=undertale&character=deltarune-susie&expression=pissed&asterisk=false&size=3&t=1746900929&margin=true"
            alt="susie"
        />
        <img
            src="https://www.demirramon.com/gen/undertale_text_box.png?text=...&box=undertale&character=deltarune-kris&expression=default&font=determination-ex&asterisk=false&size=3&margin=true&t=1746901193"
            alt="kris"
        />
        <img
            src="https://www.demirramon.com/gen/undertale_text_box.png?text=WHERE THE FUCK ARE WE!!?&box=undertale&character=deltarune-susie&expression=pissed2&font=determination-ex&asterisk=false&size=3&margin=true&t=1746901284"
            alt="susie2"
        />
    </StrictMode>,
);
