document.getElementById('hashtag-form').onsubmit = e => {
    e.preventDefault();
    const hashtag = document.getElementById('hashtag').value;
    chrome.tabs.create({ url: `https://www.instagram.com/explore/tags/${hashtag}/#automate` })
}