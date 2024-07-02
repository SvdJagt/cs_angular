import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appRandomBackground]',
  standalone: true, // Marks the directive as standalone
})
export class RandomBackgroundDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const randomColor = this.getRandomColor();
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', randomColor);
    this.setContrastText(randomColor);
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  private setContrastText(bgColor: string): void {
    const luminance = this.getLuminance(bgColor);
    const textColor = luminance > 0.5 ? '#000000' : '#ffffff'; // Choose black or white based on luminance
    this.renderer.setStyle(this.el.nativeElement, 'color', textColor);
  }

  private getLuminance(hexColor: string): number {
    hexColor = hexColor.replace(/#/g, '');
    const rgb = parseInt(hexColor, 16); // Convert hex to RGB integer
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255; // Calculate luminance (YIQ formula)
  }
}
