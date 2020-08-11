# FISHY

This is a proof-of-concept of an advanced phishing attack that I created 8 months ago.

###### Demo site - https://0x4meliorate.github.io/FISHY/

#### It works by creating a fake browser window and inserting a phishing page into the fake window. In order for the attacker to set valid domain and SSL certificate. In order to deceive the victim into not being able to distinguish the difference.

The only way the victim could notice the attack, is if the victim tried to drag the phishing site window outside of their current browser.

You could further improve on this implementation and allow them to inspect the SSL certificate and input a valid certificate.

Be careful of what you think is a legitimate site!
Sometimes the human eye can never tell.

## FISHY Features: ###
* _Loading/busy cursor before appearing, giving the effect their computer is loading the browser. Using system resources._
* _Browser can be closed using caption buttons._
* _Can be used with a reverse proxy server in order to phish your victims (in order to bypass 2FA)._
* _~~SSL text isn't usually green like the this anymore. However, the brain correlates to: Green = "Go".~~_

### TODO: ###
* _Fix caption buttons (alignment)._
* _Create the option to view the SSL certificate._
* _~~Make the SSL icon the new icon.~~_
* _Tiny pixel changes because if I can notice something off, I will never let it go._

### Example:

![alt text](https://i.imgur.com/R3nPO1q.png)

## EDUCATIONAL PURPOSES ONLY!

Warning: Only use this software according to your current legislation. Misuse of this software can raise legal and ethical issues which I don't support nor can be held responsible for.
