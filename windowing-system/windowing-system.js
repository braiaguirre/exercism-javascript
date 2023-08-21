// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

// - - - - - - - 

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function(newX, newY) {
  this.x = newX;
  this.y = newY;
}

// - - - - - - - 

export class ProgramWindow {
  constructor(screenSize, size, position) {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    let maxWidth = this.screenSize.width - this.position.x;
    let maxHeight = this.screenSize.height - this.position.y;
    let newWidth = newSize.width;
    let newHeight = newSize.height;
    
    if (newWidth < 1) newWidth = 1;
    if (newWidth > maxWidth) newWidth = maxWidth;
    if (newHeight < 1) newHeight = 1;
    if (newHeight > maxHeight) newHeight = maxHeight;
    
    this.size = new Size(newWidth, newHeight);
  }

  move(newPosition) {
    let maxX = this.screenSize.width - this.size.width;
    let maxY = this.screenSize.height - this.size.height;
    let newX = newPosition.x;
    let newY = newPosition.y;
    
    if (newX < 0) newX = 0;
    if (newX > maxX) newX = maxX;
    if (newY < 0) newY = 0;
    if (newY > maxY) newY = maxY;
    
    this.position = new Position(newX, newY);  
  }
}

export function changeWindow(window) {
  window.resize(new Size(400, 300));
  window.move(new Position(100, 150));

  return window;
}