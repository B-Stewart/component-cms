import { Component, h, Prop } from "@stencil/core";
import { IHero } from "./type";

@Component({
  tag: "app-hero",
})
export class AppHero implements IHero {
  @Prop()
  videoSrc?: string;
  @Prop()
  imageSrc?: string;
  @Prop()
  name?: string;
  @Prop()
  overlay?: boolean;
  @Prop()
  height?: string = "70vh";

  render() {
    return (
      <div class="overflow-hidden relative" style={{ minHeight: this.height }}>
        {this.videoSrc ? (
          <video
            class="absolute h-full w-full object-cover object-center z-10"
            poster={this.imageSrc}
            src={this.videoSrc}
            muted
            autoPlay
            loop
            preload="auto"
            controls={false}
          />
        ) : (
          <div
            class="absolute h-full w-full bg-cover bg-center bg-no-repeat z-10"
            style={{ backgroundImage: `url(${this.imageSrc})` }}
          />
        )}
        {this.overlay && (
          <div class="z-20 absolute opacity-75 inset-0 bg-secondary-600" />
        )}
        <div class="inset-0 absolute flex justify-center items-center z-30">
          <h1 class="uppercase text-white text-xlx2 text-center font-light text-4xl">
            {this.name}
          </h1>
        </div>
      </div>
    );
  }
}
