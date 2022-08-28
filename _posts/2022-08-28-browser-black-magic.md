---
layout: post
title: "Browser Black Magic"
date: 2022-08-28
tags: [guide, coding, opinion]
authors: [Bob]
comments: true
---
As you might know, I hate Google, and I want to remove it from my life as much as I can.
So let's talk about browsers.
Chrome is not an option and even if Chromium is fully de-googled, I'm still never going to use it.
Why? It *reminds* me of Google.

I understand that a basic product which wants to achieve wide accessibility has to have a consistent UI that never changes much and has to be as flat as possible without any nieche functions not everybody would use frequently -- because those would distract and confuse.
But keeping the UI as plain as possible results in a boring appearance and a very dull feeling when using it.
That's what I dislike so much about Material Design by Google.
It is so much optimised to work in every usecase that it is by far the worst set of icons, colours button designs and UI elements I have seen yet.
Hah, you've looked at the screenshot so intensively that you found this text!
I would rather use a desktop designed like MacOS X Cheetah than one that follows the Material Design guidelines.

And Chromium is also such a product that is so hardly optimised for everyone that is is very badly optimised for each individual user.

But I'm not grandma Dorothea who never used anything else than Chrome (installed by her gradson who studies computer science which she misinterpreted as service technician) and when suddenly a second tab opened, she is screwed and doesn't know how to navigate anymore because it now looks slightly different.
I'm not somebody who doesn't know how to use a computer.[^use-computers]

So what works better for me?
- Firefox.
It doesn't eat your memory as much and I very much like the way Mozilla does things.
For example their extensive documentations for web developers that even cover products by Google for which Google itself does not provide any documentation.
- Vivaldi.
Very customisable by default and I can move the tabs on the left side with a simple setting.
But it's based on Chromium, so it's also memory-hungry.
- Arc.
A new hyped browser that claims to create a brand new experience because it does everything different.
But it actually doesn't, because it's also based on chromium like everything else and just puts a fancy MacOS design on it.
The tab list is great and the shortcuts and commands as well, but why the hell does it shrink the URL field to such miniscule widths?
Like if you never want to see the path you are visiting?

I tried many things, but in the end I sticked to the good old Firefox, which I modified so heavily that it neither looks, nor feels like Firefox.
It's so different from anything else that probably nobody else knows how use it.
But nobody else has to.

And because I looked at every single component to find out how I could modify it to make it better, I know exactly how it functions, and only that matters.
Because of that I also don't have to write down how it works and since it's my computer, I don't have to explain it to anybody.
Although I'm doing precisely that right here.

This is how my Firefox looks like:

![Transformed Pixels](/assets/images/screenshot-firefox.png){:width='100%'}

What you'll find is that the tabs are on the left and in a vertical list, that they group into a tree structure, that there are no close buttons, no scrollbar, not even a button for opening a new tab.
In the address bar, there is no reload button, no back and forward buttons, no bookmarks, no title bar, no row of several extension icons.

But I can still access all of those functionalities I have hidden from the UI:
There tab close buttons are hidden on the favicon.
I can click the icon of any tab and it closes.
No need to scroll in a horizontal row until I find it, open it so that the website loads and reveals the close button on the right of the tab.
I don't need a scrollbar, because I know it's a scrollable list.
New tabs can be created with **⌘+T**; I have always done it that way and don't need a button for it.
Tweaking some settings also places the newly opened tab next to the currently active and not 68 tabs farther down the list.

Same with reloading, which can be done with **⌘+R** and back and forward navigation which I do with the mouse gesture or **⌘+⮂** and  **⌘+⮀**.
Bookmarks are in the tab list as a second page.
This makes way more sense to only use them there as there is already a sidebar that occupies space and doesn't open a new one which causes layout shifts etc.
But most of times I don't even need to open the bookmarks list as the address bar already searches through them.

Speaking of the address bar, the font size of the URL is also reduced to fit even more of it.
Most extensions I have installed are passive and they can rest in the overflow menu.
Removing all of the unneccessary buttons from the address bar makes it possible to display far longer URLs than what's possible in other browsers (especially Arc) and keep the profile very thin at the same time.
Inside the list of search results, Firefox always shows a section with icons for other search engines and an entry to search with the second most used engine.
I removed those as well as the prompt to log in for account sychronisation you'll find in the burger menu.

As the tab side bar is collapsible with a shortcut (set it to **^+⌥+B**) and the remaining UI is only the minimal address bar and a very large area for the website, I don't even need fullscreen views anymore when I watch films or streams.
Also, the tree structure is produced when opening links from one page that open in a new background tab.
I almost always do that by holding **⌘** when clicking a link.
Tabs can also moved into groups manually.

So how have I done it?

### enable compact mode
Follow [this guide](https://support.mozilla.org/en-US/kb/compact-mode-workaround-firefox) to reduce the height of the default tab bar by enabling compact mode.

### install Sidebery extension
The sidebar listing the tabs comes from [Sidebery](https://github.com/mbnuqw/sidebery).
It has a massive amount of settings that are actually useful and worth to fully search through.
If you want to start with [my settings](https://gist.github.com/CodingBobby/4a953c5c2e4709247d1b9b7a51e8d09f), you can import them below the "Help" section in Sidebery's settings.
Customising the looks of it is easy to do with the provided *styles editor*.
This is the CSS I added:
<script src="https://gist.github.com/CodingBobby/3ba7714de8e94af056579a8c3d3e87b4.js"></script>

### enable userChrome.css
In order to modify the CSS of the browser itself, the stylesheet `userChrome.css` has to be read by Firefox[^breaking-changes].
To enable it, navigate to `about:config` (enter it into the address bar) and search for the setting `toolkit.legacyUserProfileCustomizations.stylesheets` (copy that into the search field).
Double click onto the resulting setting element to set its state from `false` to `true`.
Now, find the location for the CSS file; on macOS, at `~/Library/Application Support/Firefox/Profiles/` there are several folders starting with a random ID, followed with the user profile.
You should move into the one ending in `.default-release` and create a new folder named `chrome` if not present already.
Inside there you can finally create the file `userChrome.css` and enter your custom code[^custom-css].
Mine is this:
<script src="https://gist.github.com/CodingBobby/1db38a9b90e1bc41bab302017ecd3cc2.js"></script>

### tweak other settings
The arrangement and visibility of the other buttons in the new toolbar can be dragged and removed after you right click on the bar and go to *customise menu* (where you have previously chosen compact mode).
I removed everything except the screenshot button (because I otherwise forget that Firefox has its own screenshot tool) and very few extensions I often want to look at or click on.

And that's it!
I now have the perfect browser that protects my privacy far more than any default browser would[^extensions], has the most space efficient UI out there, and can only be used by myself (and you, who read this).
Believe me, it's a far greater experience to surf and research now.
Maybe, this little guide helps you to realise, that browsers don't have to be the most boring piece of software you're using every day, that you don't have to throw your private data at Google just to browse the internet, and that you don't have to fear to customise your computer to an extend that would confuse other people.
Go ahead, and figure out how to make your browser better!

---
{: data-content="footnotes"}

[^use-computers]: [This](http://coding2learn.org/blog/2013/07/29/kids-cant-use-computers) blog from over 9 years ago will never loose relevance.

[^breaking-changes]: You might argue that Firefox is in active development and css selectors and other functionalities likely change in the future and break your modified version. Yes, that will totally happen. But as it is only one CSS file I can simply rename to let it be ignored by Firefox and the tab sidebar is only an extension I can deactivate, it is very quick to get back to the default browser.

[^custom-css]: [Here](https://github.com/piroor/treestyletab/wiki/Code-snippets-for-custom-style-rules) is a very extensive list of things you can do with `userChrome.css` and other hidden tweaks.

[^extensions]: Thanks to the extensions [Privacy Badger](https://privacybadger.org/), [Decentraleyes](https://decentraleyes.org/), [NeatURL](https://addons.mozilla.org/de/firefox/addon/neat-url/), [uBlock Origin](https://github.com/gorhill/uBlock#ublock-origin) and [Request Control](https://addons.mozilla.org/de/firefox/addon/requestcontrol/).
