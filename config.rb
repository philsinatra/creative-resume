# Require any additional compass plugins here.
require 'color-schemer'
require 'susy'
# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "build/css"
sass_dir = "src/sass"
images_dir = "build/images"
javascripts_dir = "build/js"
fonts_dir = "fonts"

output_style = :compressed
environment = :production

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

color_output = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
preferred_syntax = :scss
