---
layout: post
date: 2015-05-10 00:00
title: Capybara method and matchers which is frequently used
tags: [featuretest, capybara, rubyonrails]
slug: capybara-method-or-matches-which-is-frequently-used
---

## method

fill with value in input
{% highlight ruby %}
fill_in("name value", with: "value")
{% endhighlight %}

click button
{% highlight ruby %}
click_button("submit")
{% endhighlight %}

find element
{% highlight ruby %}
find("#selector")
{% endhighlight %}

select select tag option
{% highlight ruby %}
select("japan", :from => "country")
{% endhighlight %}

access page
{% highlight ruby %}
visit("/page/path")
{% endhighlight %}

change host
{% highlight ruby %}
Capybara.app_host = "http://example.com"
{% endhighlight %}

## matchers

{% highlight ruby %}
expect(page).to have_title("page title")
expect(page).to have_link("link text", :href => "/path")
expect(page).to have_content("content text")
expect(form).to have_selector(:css, "[name='email']", visible: true)
{% endhighlight %}