# -richxprams-dc-push-rank-new
Simple self-bot for pushing discord rank on any discord server.

Discord push rank bot
Simple self-bot for pushing discord rank on any discord server

Please note that self-bot is against Discord T&C.

I am not responsible if your account getting banned or some shit, so do it with your own risk

Quick start
Installation
Download project
git clone https://github.com/richxprams/dc-push-rank-new.git
Go to project directory
cd Discord-push-rank-bot
Install Python dependencies
pip install coloredlogs discord.py-self
Preparation done. Now you need to setup the bot configuration
Setup bot
Get your discord token:

Open your browser and activate developer mode
Login your discord account
Go to developer mode and click on XHR tab
Find login request and click
Go to Responses tab and find token value
Copy that token
Edit config.ini file:

Open config.ini file with your favorites text editor
Find TOKEN variable and paste token value that you got earlier
The rest of configuration is self-explanatory so i don't need to reiterate it here
Note: you can go to wordlist directory and change the message that you want to send, each of the message should be separated by double enter

Run the bot
To run the bot, just type this command in your terminal:

python dc.py
Then go to the server that you want to run the bot in, type gm to start the bot

Note: You can change START_WORD value inside config.ini file
