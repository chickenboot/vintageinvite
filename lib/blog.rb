def all_tags(items = nil, sort = false)
  items ||= @items # default to all items if no items passed
  tags = {}
  items.each do |i|
    (i[:tags] || []).each{|t| tags[t] ||= 0; tags[t] += 1 }
  end
  # if sort is true, sort by item count descending
  sort ? tags.sort {|tl, tr| tr[1] <=> tl[1]} : tags
end

def build_tag_pages(items)
  all_tags(items).each do |tag,count|
    items << Nanoc3::Item.new(
      "= render('_blog_page', :tag => '#{tag}', :page_title => 'Tag: #{tag}')",
      { :title => "Tag: #{tag}" },  # , :is_hidden => true
      "/blog/tags/#{tag}/", :binary => false
    )
  end
end

