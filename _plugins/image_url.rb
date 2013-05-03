require 'liquid'

module ImageFilter
  def image_url(input)
    if input.nil?
      "hicapacity.org"
    else
      input
    end
  end
end

Liquid::Template.register_filter(ImageFilter)
