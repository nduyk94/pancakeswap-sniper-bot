const { workerData, parentPort } = require('worker_threads')

const axios = require('axios').default;
const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
var readFile = fs.readFileSync('config.json');
var config = JSON.parse(readFile);
var readJsonTask = fs.readFileSync('cmt-task.json');
var twitterTask = JSON.parse(readJsonTask);
const baseApiURL = "https://twitter.com/i/api/graphql/";
const chalk = require("chalk");
const { setTimeout } = require('timers/promises');
fs.writeFileSync('success-url.txt', '')
var rawData = fs.readFileSync('all.txt', 'utf-8');   //
var counter2 = twitterTask.main.length;
var cookies = rawData.split('\n')
var counter = cookies.length;
var params = process.argv.slice(2);
var args = {};
for (var l = 0, len = params.length; l < len; l += 1) {
    var key_value = params[i].split('=');
    args[key_value[0]] = key_value[1];
}

let i = 0;

console.log(chalk.black.bgCyan(`/********//-------Total accounts: ${counter} ---------//********/`));
console.log(chalk.red('Bot is running...'));

(async () => {
    await WakeMeUp();
})();

function Vi(i) {
    var data = fs.readFileSync('vi1.txt', "utf-8");   //
    var lines = data.split('\n');
    var Vi = lines[i];
    return Vi;
}

async function WakeMeUp() {
    var accountCookie = cookies[i];
    if (accountCookie.indexOf("\r") > -1) {
        accountCookie = accountCookie.replace("\r", '');
    }
    var accountToken = accountCookie.match('[a-zA-Z0-9]{160}')[0];
    let options = {
        headers: {
            "authorization": config.queriID.authorization,
            "cookie": accountCookie,
            "sec-ch-ua": '"Edge";v="104", "Chromium";v="104", "Not=A?Brand";v="24"',
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": '"Android"',
            "sec-fetch-dest": "empty",
            "content-type": "application/json",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent": "Mozilla/5.0 (Linux; Android 10; HLK-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Mobile Safari/537.36 EdgA/104.0.1293.70",
            "x-csrf-token": accountToken,
            "x-twitter-active-user": "yes",
            "x-twitter-auth-typ": "OAuth2Session",
            "x-twitter-client-language": "en"
        }
    }
    if	(i % 3 === 0) {
	if (config.settings.dcomName != null) {
        console.log(chalk.red('Reset dcom...'));
        var ipAddress = await RenewIp(config.settings.dcomName);
        console.log(chalk.black.bgCyan(`/********//---------------IP: ${ipAddress}----------//********/`));
        await setTimeout(getRndInteger(config.settings.timeoutTasksMin,config.settings.timeoutTasksMax));
    	}
    }
    var twitterUsername = await LoginUserTweet(options);
    console.log(`----------------------------------------------------------------------------`);
    console.log(chalk.green("Login: " + twitterUsername + `, Current account in list: ${(i + 1)}`));
    let i2 = 0;
    if (twitterUsername != null) {
	var shufflemain = shuffle(twitterTask.main)
        await DoTask(options, i);
    } else {
        console.log(chalk.red('Error code: 403, try to enter new cookie. Line:  ' + (i + 1)));
    }
    async function DoTask(options) {
        var tasks = shufflemain[i2];
        if (tasks.follow.indexOf(',') > -1) {
            usernames = tasks.follow.split(',');
            for (let g = 0; g < usernames.length; g++) {
                await FollowTwitter(options, usernames[g], twitterUsername);
	await setTimeout(getRndInteger(config.settings.timeoutStepMin,config.settings.timeoutStepMax));
            }
        } else {
            await FollowTwitter(options, tasks.follow, twitterUsername);
        }
        //favorite, retweet, comment
        var parseTweetId = tasks.link.match('([0-9]{19})');
        //var tagUserT = RandomTags(tasks.tags);
	var Tweets0 = RandomTweets(tasks.tweets00);
        var Tweets1 = RandomTweets(Randoms());
        var Tweets2 = RandomTweets(Randoms());
        var Tweets3 = RandomTweets(Randoms());
        var Tweets4 = RandomTweets(tasks.tweets00);
        var Tweets5 = RandomTweets(Randoms());
        var Tweets6 = RandomTweets(Randoms());
        var Tweets7 = RandomTweets(Randoms());
	var ran = Randoms1();
	var ran1 = Randoms2();
        var T = tasks.tags;
	if (T == 0) {
		var tagUserT = " "; }
		else {
		var tagUserT = RandomTags(tasks.tags);}
        var V = tasks.vi;
	if (V == 0) {
		var tagUserV = " "; }
		else {
		var tagUserV = Vi(i);}
	//var tagUser0 = RandomTweets(tasks.tweets)
        var tagUser1 = RandomTweets1(tasks.tweets1)
        var tagUser2 = RandomTweets2(tasks.tweets2)
        var tagUser3 = RandomTweets3(tasks.tweets3)
	//console.log(chalk.blue(`${tagUserV}`));
        var tagUserX = ` ${tagUserT} ${tagUser1} ${tagUser2} ${tagUser3}`;
	//var tagUserX = `{tagUserV}`;
        if (parseTweetId != null) {
            await setTimeout(getRndInteger(config.settings.timeoutStepMin,config.settings.timeoutStepMax));
            await FavoriteTweet(options, parseTweetId[0], twitterUsername);
            await setTimeout(getRndInteger(config.settings.timeoutStepMin,config.settings.timeoutStepMax));
            await CreateRetweet(options, parseTweetId[0], twitterUsername);
            if (args.rerun == undefined) {
                if (tasks.tags >= 0) {
                    await setTimeout(getRndInteger(config.settings.timeoutStepMin,config.settings.timeoutStepMax));
                    await CommentTweet(options, parseTweetId[0], tagUserX, twitterUsername);
                }
            } else if (args.rerun) {
                console.log(chalk.blue('Rerun = true, running without comment...'));
            }
        } else {
            console.log(chalk.red("Tweet link not vaild"));
        }
	if (tasks.tweets00 == 1){
	if (ran > 0) {
	var TweetsX = `${Tweets0} ${Tweets1}\n${Tweets2} ${Tweets3}`;
        await Createtweet(options, TweetsX);
        await setTimeout(getRndInteger(config.settings.timeoutStepMin,config.settings.timeoutStepMax));
        }	
	if (ran1 > 2) {
	var TweetsX = `${Tweets4} ${Tweets5}\n${Tweets6} ${Tweets7}`;
        await Createtweet(options, TweetsX);
        await setTimeout(getRndInteger(config.settings.timeoutStepMin,config.settings.timeoutStepMax));
	}}
	if (tasks.rtweets == 1){
	var rtweet = RandomRtweets(tasks.rtweets);
	var parseTweetId1 = rtweet.match('([0-9]{19})');
        await CreateRetweet(options, parseTweetId1[0]);
	}
	i2++;
        if (i2 < counter2) {
            await DoTask(options);
        }
    }
    i++;
    if (i < counter) {
        await WakeMeUp();
    }
}

async function LoginUserTweet(options) {
    var url = 'https://twitter.com/i/api/1.1/account/settings.json?include_mention_filter=true&include_nsfw_user_flag=true&include_nsfw_admin_flag=true&include_ranked_timeline=true&include_alt_text_compose=true&ext=ssoConnections&include_country_code=true&include_ext_dm_nsfw_media_filter=true&include_ext_sharing_audiospaces_listening_data_with_followers=true';
    try {
        var res = await axios.get(url, options);
        if (res.status == 200) {
            if (JSON.stringify(res.data.errors) != null) {
                res.data.errors.forEach(error => {
                    console.log(chalk.red("LoginUserTweet(), ERROR: " + error.message));
                })
            } else {
                return res.data.screen_name;
            }
        } else {
            console.log(chalk.red(`Error, status: ${res.status}`));
        }
    } catch (error) {
        console.log(chalk.red('LoginUserTweet() ' + error));
        if (error.code === 'ECONNRESET') {
            console.log(chalk.red(`Error: ${error.code}, trying again...`));
            LoginUserTweet(options);
        }
        else {
            console.error(error.message + ', Your account may be banned');
        }
    }

}
async function RenewIp(moduleName) {
    const disconnect = await exec('rasdial /disconnect');
    if (disconnect.stderr != null) {
        const connect = await exec(`rasdial ${moduleName}`);
        if (connect.stderr != null) {
        } else {
        }
        const getIpv4 = await exec(`nslookup myip.opendns.com. resolver1.opendns.com`);
        var regex = /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/gi;
        var ipAddress = getIpv4.stdout.match(regex)[1];
        return ipAddress;
    } else {
    }
	await setTimeout(getRndInteger(config.settings.timeoutTasksMin,config.settings.timeoutTasksMax));
}
async function CreateRetweet(options, tweetID, twitterUsername) {
    var url = baseApiURL + config.queriID.CreateRetweet + '/CreateRetweet';
    var payload = JSON.stringify({
        "variables": {
            "tweet_id": tweetID,
            "dark_request": false
        },
        "queryId": config.queriID.CreateRetweet
    });
    try {
        var response = await axios.post(url, payload, options);
        if (JSON.stringify(response.data.errors) != null) {
            response.data.errors.forEach(error => {
                console.log(chalk.red('CreateRetweet(): ' + error.message));
                if (error.message.indexOf('already') == -1) {
                    fs.appendFileSync('failed-log.txt', `User: ${twitterUsername} \n CreateRetweet() ${error.message} \n`);
                }
            })
        } else {
            var tweetedID = response.data.data.create_retweet.retweet_results.result.rest_id;
            console.log(chalk.green('DONE!!! Retweet ID: ' + tweetedID));
        }
    } catch (error) {
        console.log(chalk.red('CreateRetweet() ' + error.code));
        fs.appendFileSync('failed-log.txt', `User: ${twitterUsername} \n CreateRetweet() ${error.code} \n`);
        if (error.message.indexOf('401') !== -1) {
            console.log(chalk.red(`'Auth error, token index: ${i} token: ${accountToken}`));
        }
        if (error.code === 'ECONNRESET') {
            console.log(chalk.red(`Error: ${error.code}, trying again...`));
        }
    }
}

async function FollowTwitter(options, twitterUsername, username) {
    var url = "https://twitter.com/i/api/1.1/friendships/create.json";
    var twitterID = await FindTweetID(options, twitterUsername);
    var payload = `include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&include_ext_has_nft_avatar=1&skip_status=1&id=${twitterID}`;
    const optionsMofied = JSON.parse(JSON.stringify(options).replace('"content-type":"application/json",', ''));
    try {
        var response = await axios.post(url, payload, optionsMofied);
        if (JSON.stringify(response.data.errors) != null) {
            response.data.errors.forEach(error => {
                console.log(error.message);
            })
        } else {
            if (response.data.following) {
                console.log(twitterUsername + ': ' + "You already follow this user!");
            } else {
                console.log(chalk.green("DONE!!! Follow user: " + response.data.screen_name));
            }
        }
    } catch (error) {
        console.log(chalk.red('FollowTwitter() ' + ` ${twitterUsername} ` + error.code));
        fs.appendFileSync('failed-log.txt', `User: ${username} \n FollowTwitter() ${twitterUsername} ${error.code} \n`);
        if (error.code === 'ECONNRESET') {
            console.log(`Error: ${error.code}, trying again...`);
        }
    }
}

async function CommentTweet(options, tweetID, content, twitterUsername) {
    var url = baseApiURL + config.queriID.CreateTweet + '/CreateTweet';
    var payload = JSON.stringify({
        "variables": {
            "tweet_text": content,
            "reply": {
                "in_reply_to_tweet_id": tweetID,
                "exclude_reply_user_ids": []
            },
            "media": {
                "media_entities": [],
                "possibly_sensitive": false
            },
            "withDownvotePerspective": false,
            "withReactionsMetadata": false,
            "withReactionsPerspective": false,
            "withSuperFollowsTweetFields": true,
            "withSuperFollowsUserFields": true,
            "semantic_annotation_ids": [],
            "dark_request": false,
            "__fs_interactive_text": false,
            "__fs_responsive_web_uc_gql_enabled": false,
            "__fs_dont_mention_me_view_api_enabled": false
        },
        "queryId": config.queriID.CreateTweet
    });
    try {
        var response = await axios.post(url, payload, options);
        if (JSON.stringify(response.data.errors) != null) {
            response.data.errors.forEach(error => {
                console.log(chalk.red('CommentTweet() ' + error.message));
                fs.appendFileSync('failed-log.txt', `User: ${twitterUsername} \n CommentTweet() ${error.message} \n`);
            })
        } else {
            var tweetUsername = response.data.data.create_tweet.tweet_results.result.core.user_results.result.legacy.screen_name;
            var tweetID = response.data.data.create_tweet.tweet_results.result.rest_id;
            var tweetUrl = chalk.green(`Done!! Comment link: https://twitter.com/${tweetUsername}/status/${tweetID}`);
            if (config.settings.createLog) {
                fs.appendFileSync('log-success-comment-url.txt', `https://twitter.com/${tweetUsername}/status/${tweetID}` + '\n');
            }
            console.log(tweetUrl);
        }
    } catch (error) {
        console.log(chalk.red('CommentTweet() ' + error.code));
        fs.appendFileSync('failed-log.txt', `User: ${twitterUsername} \n CommentTweet() ${error.code} \n`);
        if (error.message.indexOf('401') !== -1) {
            console.log(chalk.red(`'Auth error, token index: ${i} token: ${accountToken}`));
        }
        if (error.code === 'ECONNRESET') {
            console.log(chalk.red(`Error: ${error.code}, trying again...`));
        }
    }
}

async function FavoriteTweet(options, tweetID, twitterUsername) {
    var payload = JSON.stringify({
        "variables": {
            "tweet_id": tweetID,
            "queryId": config.queriID.FavoriteTweet
        },
    });
    var url = baseApiURL + config.queriID.FavoriteTweet + '/FavoriteTweet';
    try {
        var response = await axios.post(url, payload, options);
        if (JSON.stringify(response.data.errors) != null) {
            response.data.errors.forEach(error => {
                console.log(chalk.red('FavoriteTweet() ' + error.message));
                if (error.message.indexOf('already') == -1) {
                    fs.appendFileSync('failed-log.txt', `User: ${twitterUsername} \n FavoriteTweet() ${error.message} \n`);
                }
            })
        } else {
            console.log(chalk.green('DONE!!! Favorited: ' + tweetID));
        }
    } catch (error) {
        console.log(chalk.red('FavoriteTweet() ' + error.code));
        fs.appendFileSync('failed-log.txt', `User: ${twitterUsername} \n FavoriteTweet() ${error.code} \n`);
        if (error.message.indexOf('401') !== -1) {
            console.log(chalk.red(`'Auth error, token index: ${i} token: ${accountToken}`));
        }
        if (error.code === 'ECONNRESET') {
            console.log(chalk.red(`Error: ${error.code}, trying again...`));
        }
    }
}

async function Createtweet(options, content, twitterUsername) {
    var url = baseApiURL + config.queriID.CreateTweet + '/CreateTweet';
    var payload = JSON.stringify({
        "variables": {
            "tweet_text": content,
            "media": {
                "media_entities": [],
                "possibly_sensitive": false
            },
            "withDownvotePerspective": false,
            "withReactionsMetadata": false,
            "withReactionsPerspective": false,
            "withSuperFollowsTweetFields": true,
            "withSuperFollowsUserFields": true,
            "semantic_annotation_ids": [],
            "dark_request": false,
            "__fs_interactive_text": false,
            "__fs_responsive_web_uc_gql_enabled": false,
            "__fs_dont_mention_me_view_api_enabled": false
        },
        "queryId": config.queriID.CreateTweet
    });
    try {
        var response = await axios.post(url, payload, options);
        if (JSON.stringify(response.data.errors) != null) {
            response.data.errors.forEach(error => {
                console.log(chalk.red('CreateTweet() ' + error.message));
            })
        } else {
            var tweetUsername = response.data.data.create_tweet.tweet_results.result.core.user_results.result.legacy.screen_name;
            var tweetID = response.data.data.create_tweet.tweet_results.result.rest_id;
            var tweetUrl = chalk.green(`link: https://twitter.com/${tweetUsername}/status/${tweetID}`);
            if (config.settings.createLog) {
                fs.appendFileSync('success-url.txt', `https://twitter.com/${tweetUsername}/status/${tweetID}` + '\n');
            }
            console.log(chalk.green(tweetUrl));
        }
    } catch (error) {
        console.log(chalk.red('CreateTweet() ' + error.code));
        fs.appendFileSync('failed-log-tweet.txt', `User: ${twitterUsername} \n CreateTweet() ${error.code} \n`);
        if (error.message.indexOf('401') !== -1) {
            console.log(chalk.red(`'Auth error, token index: ${i} token: ${accountToken}`));
        }
        if (error.code === 'ECONNRESET') {
            console.log(chalk.red(`Error: ${error.code}, trying again...`));
        }
    } await setTimeout(getRndInteger(config.settings.timeoutStepMin, config.settings.timeoutStepMax));
}

async function FindTweetID(options, username) {
    var url = `https://twitter.com/i/api/graphql/${config.queriID.UserByScreenName}/UserByScreenName?variables=%7B%22screen_name%22%3A%22${username}%22%2C%22withSafetyModeUserFields%22%3Atrue%2C%22withSuperFollowsUserFields%22%3Atrue%7D`;
    try {
        const res = await axios.get(url, options);
        if (res.status == 200) {
            if (JSON.stringify(res.data.errors) != null) {
                res.data.errors.forEach(error => {
                    console.log(chalk.red(' ' + "Problem: " + error.message));
                })
            } else {
                if (Object.keys(res.data.data).length > 0) {
                    return res.data.data.user.result.rest_id;
                } else {
                    console.log(chalk.red("Twitter username not vaild"));
                }
            }
        } else {
            console.log(chalk.red('Error, status: ' + res.status));
        }
    } catch (error) {
        console.log(chalk.red(`FindTweetID() ${username}, ERROR: ${error}`));
        if (error.code === 'ECONNRESET') {
            console.log(chalk.red(`FindTweetID(): ${error.code}, trying again...`));
            await FindTweetID(options, username);
        }
        if (error.message.indexOf('ETIMEDOUT') > -1) {
            await FindTweetID(options, username);
            console.log(chalk.red(`FindTweetID(): ${error}, trying again...`));
        }
    }

}
async function CheckFollowing(options, followUser) {
    var url = `https://twitter.com/i/api/graphql/7mjxD3-C6BxitPMVQ6w0-Q/UserByScreenName?variables={"screen_name":"${followUser}","withSafetyModeUserFields":true,"withSuperFollowsUserFields":true}`;
    try {
        var res = await axios.get(url, options);
        if (res.status == 200) {
            return res.data.data.user.result.legacy.following;
        }
    } catch (error) {
        console.log(chalk.red('CheckFollowing() ' + error));
        if (error.code === 'ECONNRESET') {
            console.log(chalk.red(`Error: ${error.code}, trying again...`));
        }
    }

}
async function FollowTwitter(options, twitterUsername, username) {
    var url = "https://twitter.com/i/api/1.1/friendships/create.json";
    var twitterID = await FindTweetID(options, twitterUsername);
    var payload = `include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&include_ext_has_nft_avatar=1&skip_status=1&id=${twitterID}`;
    const optionsMofied = JSON.parse(JSON.stringify(options).replace('"content-type":"application/json",', ''));
    try {
        var response = await axios.post(url, payload, optionsMofied);
        if (JSON.stringify(response.data.errors) != null) {
            response.data.errors.forEach(error => {
                console.log("Problem: " + error.message);
            })
        } else {
            if (response.data.following) {
                console.log(twitterUsername + ': ' + "You already follow this user!");
            } else {
                console.log(chalk.green("DONE!!! Follow user: " + response.data.screen_name));
            }
        }
    } catch (error) {
        console.log(chalk.red('FollowTwitter() ' + ` ${twitterUsername} ` + error));
        fs.appendFileSync('failed-log.txt', `User: ${username} \n FollowTwitter() ${twitterUsername} ${error} \n`);
        if (error.code === 'ECONNRESET') {
            console.log(`Error: ${error.code}, trying again...`);
        }
    }
}
function RandomTags(tags) {
    var data = fs.readFileSync('tags.txt', "utf-8");
    var lines = data.split('\n');
    var twitterTags = '';
    for (let i = 0; i < tags; i++) {
        var randomLine = Math.floor(Math.random() * lines.length);
        twitterTags += '@' + lines[randomLine] + ' ';
    }
    return twitterTags;
}



function RandomTweets(tweets) {
    var data = fs.readFileSync('random-tweets3.txt', "utf-8");
    var lines = data.split('\n');
    var twitterTweets = '';
    for (let i = 0; i < tweets; i++) {
        var randomLine = Math.floor(Math.random() * lines.length);
        twitterTweets += lines[randomLine].trim();
    }
    return twitterTweets;
}

function RandomTweets1(tweets) {
    var data = fs.readFileSync('tweets1.txt', "utf-8");
    var lines = data.split('\n');
    var twitterTweets = '';
    for (let i = 0; i < tweets; i++) {
        var randomLine = Math.floor(Math.random() * lines.length);
        twitterTweets += lines[randomLine];
    }
    return twitterTweets;
}

function RandomTweets2(tweets) {
    var data = fs.readFileSync('tweets2.txt', "utf-8");
    var lines = data.split('\n');
    var twitterTweets = '';
    for (let i = 0; i < tweets; i++) {
        var randomLine = Math.floor(Math.random() * lines.length);
        twitterTweets += lines[randomLine];
    }
    return twitterTweets;
}

function RandomTweets3(tweets) {
    var data = fs.readFileSync('tweets3.txt', "utf-8");
    var lines = data.split('\n');
    var twitterTweets = '';
    for (let i = 0; i < tweets; i++) {
        var randomLine = Math.floor(Math.random() * lines.length);
        twitterTweets += lines[randomLine];
    }
    return twitterTweets;
}

function RandomFollow(follows) {
    var data = fs.readFileSync('random-follow.txt', "utf-8");
    var lines = data.split('\n');
    var sfollow = '';
    for (let i = 0; i < follows; i++) {
        var randomLine = Math.floor(Math.random() * lines.length);
        sfollow += lines[randomLine];
    }
    return sfollow;
}
function RandomRtweets(rtweets) {
    var data = fs.readFileSync('random-rtweets.txt', "utf-8");
    var lines = data.split('\n');
    var retweets = '';
    for (let i = 0; i < rtweets; i++) {
        var randomLine = Math.floor(Math.random() * lines.length);
        retweets += lines[randomLine];
    }
    return retweets.trim();
}
function Randoms() {
	var y = Math.random();
	if (y < 0.5)
  		y = 0
	else
  		y= 1
	return y;
}

function Randoms1() {
	var y = Math.random();
	if (y < 0.45)
  		y = 0
	else
  		y= 1
	return y;
}
function Randoms2() {
	var y = Math.random();
	if (y < 0.55)
  		y = 0
	else
  		y= 1
	return y;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function shuffle(arra1) {
	var ctr = arra1.length, temp, index;

	// While there are elements in the array
		while (ctr > 0) {
	// Pick a random index
			index = Math.floor(Math.random() * ctr);
	// Decrease ctr by 1
			ctr--;
	// And swap the last element with it
			temp = arra1[ctr];
			arra1[ctr] = arra1[index];
			arra1[index] = temp;
		}
		return arra1;
}

parentPort.postMessage({ hello: workerData })