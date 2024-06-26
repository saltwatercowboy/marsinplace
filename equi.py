from PIL import Image
import numpy as np
import math
import argparse

def latlon_to_equirectangular(lat, lon, width, height):
    x = (lon + 180.0) * (width / 360.0)
    y = (lat + 90.0) * (height / 180.0)
    return x, y

def convert_to_equirectangular(input_image_path, output_image_path, output_width, output_height):
    input_image = Image.open(input_image_path)
    input_width, input_height = input_image.size
    output_image = Image.new("RGB", (output_width, output_height))

    input_pixels = np.array(input_image)
    output_pixels = np.array(output_image)

    for y in range(output_height):
        for x in range(output_width):
            lon = (x / output_width) * 360.0 - 180.0
            lat = 90.0 - (y / output_height) * 180.0

            src_x, src_y = latlon_to_equirectangular(lat, lon, input_width, input_height)
            src_x = int(src_x) % input_width
            src_y = int(src_y) % input_height

            output_pixels[y, x] = input_pixels[src_y, src_x]

    output_image = Image.fromarray(output_pixels)
    output_image.save(output_image_path)

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Convert image to equirectangular projection.")
    parser.add_argument("input_image", type=str, help="Path to the input image")
    parser.add_argument("output_image", type=str, help="Path to the output image")
    parser.add_argument("--width", type=int, default=2048, help="Width of the output image")
    parser.add_argument("--height", type=int, default=1024, help="Height of the output image")

    args = parser.parse_args()

    convert_to_equirectangular(args.input_image, args.output_image, args.width, args.height)

