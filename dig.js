var tweets = [];

function convertTimestamp(timestamp) {
  var d = new Date(timestamp * 1000),	// Convert the passed timestamp to milliseconds
		yyyy = d.getFullYear(),
		mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
		dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
		hh = d.getHours(),
		h = hh,
		min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
		ampm = 'AM',
		time;

	if (hh > 12) {
		h = hh - 12;
		ampm = 'PM';
	} else if (hh === 12) {
		h = 12;
		ampm = 'PM';
	} else if (hh == 0) {
		h = 12;
	}

	// ie: 2013-02-18, 8:35 AM
	time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

	return time;
}

$('.tweet.js-stream-tweet.js-actionable-tweet').each(function() {
    var tweet = {}
    tweet.timestamp = $(this).find('span._timestamp.js-short-timestamp').attr('data-time')

    tweet.time = new Date(tweet.timestamp*1000)

    tweet.timeExpression = convertTimestamp(tweet.timestamp)

    tweet.datascreenname = $(this).attr('data-screen-name')
    tweet.dataname = $(this).attr('data-name')
    tweet.content = $(this).find('p.TweetTextSize.js-tweet-text.tweet-text').text()

    tweet.reply = Number($(this).find('.ProfileTweet-actionButton.js-actionButton.js-actionReply').find('span.ProfileTweet-actionCountForPresentation').text())
    tweet.retweet = Number($(this).find('.ProfileTweet-actionButton.js-actionButton.js-actionRetweet').find('span.ProfileTweet-actionCountForPresentation').text())
    tweet.like = Number($(this).find('.ProfileTweet-actionButton.js-actionButton.js-actionFavorite').find('span.ProfileTweet-actionCountForPresentation').text())
    //.....


    tweets.push(tweet)
})

console.save(tweets, 'qianrenjihua.json')
