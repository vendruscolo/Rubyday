task :default do
  sh "compass compile ."
  file_list = FileList.new('**/*.haml')
  file_list.each do |f|
    html = f.gsub(/\.haml/, ".html")
    cmd = "haml #{f} #{html}"
    sh "#{cmd}"
  end
end