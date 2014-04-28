class Thumbnailize < Nanoc::Filter
  identifier :thumbnailize
  type       :binary

  def run(filename, params={})
    dest_file = output_filename
    dest_file += ".#{params[:extension]}" if params[:extension]
    system(
      'convert',
      '-resize',
      params[:width].to_s,
      '-density',
      params[:density].to_s,
      filename,
      dest_file
    )
    File.rename(dest_file, output_filename) if params[:extension]
  end
end