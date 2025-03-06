import * as pointer from "./pointer";
import { Vector, VectorLike } from "./vector";
import * as input from "./input";
import { loadCurrentColor, saveCurrentColor, setColor } from "./view";
import { rect } from "./rect";
import { text } from "./letter";

export type Button = {
  pos: VectorLike;
  size: VectorLike;
  text: string;
  isToggle: boolean;
  onClick: () => void;
  isPressed: boolean;
  isSelected: boolean;
  isHovered: boolean;
  toggleGroup: Button[];
  isSmallText: boolean;
};

/** @ignore */
export function get({
  pos,
  size,
  text,
  isToggle = false,
  onClick = () => {},
  isSmallText = true,
}: {
  pos: VectorLike;
  size: VectorLike;
  text: string;
  isToggle?: boolean;
  onClick?: () => void;
  isSmallText?: boolean;
}): Button {
  return {
    pos,
    size,
    text,
    isToggle,
    onClick,
    isPressed: false,
    isSelected: false,
    isHovered: false,
    toggleGroup: [],
    isSmallText,
  };
}

let toggleManager: ToggleManager | null = null;

/** @ignore */
export class ToggleManager {
  private buttons: Button[] = [];

  register(button: Button) {
    this.buttons.push(button);
    button.toggleGroup = this.buttons.filter(b => b !== button);
  }

  deselectAll(except: Button) {
    this.buttons.forEach(button => {
      if (button !== except) {
        button.isSelected = false;
      }
    });
  }
}

/** @ignore */
export function initializeToggleManager(manager: ToggleManager) {
  toggleManager = manager;
}

/** @ignore */
export function update(button: Button) {
  const o = new Vector(input.pos).sub(button.pos);
  button.isHovered = o.isInRect(0, 0, button.size.x, button.size.y);
  if (button.isHovered && pointer.isJustPressed) {
    button.isPressed = true;
  }
  if (button.isPressed && !button.isHovered) {
    button.isPressed = false;
  }
  if (button.isPressed && pointer.isJustReleased) {
    button.onClick();
    button.isPressed = false;
    if (button.isToggle) {
      if (toggleManager) {
        toggleManager.deselectAll(button);
        button.isSelected = true;
      } else {
        button.isSelected = !button.isSelected;
      }
    }
  }
      draw(button);
    }

export function draw(button: Button) {
  saveCurrentColor();
  setColor(button.isPressed ? "blue" : "light_blue");
  rect(button.pos.x, button.pos.y, button.size.x, button.size.y);
  if (button.isToggle && !button.isSelected) {
    setColor("white");
    rect(
      button.pos.x + 1,
      button.pos.y + 1,
      button.size.x - 2,
      button.size.y - 2
    );
  }
  setColor(button.isHovered ? "black" : "blue");
  text(button.text, button.pos.x + 3, button.pos.y + 3, {
    isSmallText: button.isSmallText,
  });
  loadCurrentColor();
}
