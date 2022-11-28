---
title: Death to Legacy Code
date: '2021-02-13'
excerpt: We've all come across Legacy Code at least once in our career. How do you deal with this mess? I don't have a perfect solution, but I have one that worked for me and my company.
featuredImage: /img/posts/death-to-legacy-code.jpg
tags:
  - Career
  - JavaScript
---

_This article was originally given as a talk to [JS.LA](https://js.la/)'s_
_January 2021 virtual meetup. Watch the recording on their_
_[YouTube Channel](https://www.youtube.com/watch?v=xWs3DEv3-R8)._

## Long Live Legacy Code

We've all come across Legacy Code at least once in our career. That section of
code, that whenever the boss asks us to work in, we get a bead of sweat running
down the side of our face. There are no tests, no documentation, and the person
who wrote it is no longer around to explain what is going on. What's worse is,
we know if we break it, bad things are going to happen. But what is legacy code
exactly, what is the actual definition?

![giant dumpster fire of legacy code](https://media.giphy.com/media/l0IynvPneUpb7SnBe/giphy.gif 'Legacy Code in Action')

> Legacy code is code you're afraid to touch.  
> -- Eli Lopian, [Defining Legacy Code](https://dzone.com/articles/defining-legacy-code)

Eli Lopian's article explains it well; its code you're afraid to touch and its
for all those reasons I mentioned above. This dark section of your code base
that brings a painful tear to your eye. So how do you deal with this giant mess?
I don't have a perfect solution, but I have a solution that worked for me and
my company, REX.

## In the Beginning

I joined REX in May of 2017. I was the 5th engineer hired, and their first
full-stack/front-end engineer. Most of the team were backend engineers who
specialized in Java APIs. I was excited to help build a company from the ground
up, but they had a 1 year start to build the site before I joined. So what did
I walk into?

- Our average page load time was around 13 seconds
- Every other release to production broke and took down the site
- Any new feature, even the simplest of new pages with text and images took
  developers nearly a week to build and ship
- What tests were originally written, were abandoned and could not even run
  anymore.
- Each module had to be manually included into the index.html with a
  `<script />`, and pray that you got the order right.
- There were 3 0r 4 different code patterns, meaning a very confusing and
  disorganized code structure.
- Things were written so poorly that adding more than 4 of our custom designed
  select boxes would cause an infinite render loop and crash the page

![This is Fine says a dog inside a house on fire](https://media.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif 'This is Fine')

At the time, I had never used AngularJS before, and I wasn't sure if it was a
lack of experience that was the problem. After a few months of though, it became
clear it was not me. There was not a single line of code in this project that I
had not come to fear. This was a perfect storm of legacy code.

## At First You Don't Succeed

Eventually it came time to tackle this beast. You can't have a successful
startup and have a barely functional site. It doesn't work. Luckily for us
Google provided instructions on how you could "easily" migrate your old
AngularJS app into a brand spanking new Angular v2+ app! What was even better
was you didn't have to move everything over at once, the new components and old
components could talk to each other! We could slowly update our code base into
something better and still be able to ship features. This should be simple and
easy!

It was not.

Two engineers spent two weeks following these instructions, and in the end we
could not upgrade the app. The patterns and practices in our code base were so
"unique" that we could not upgrade them without re-writing the whole app in one
go. The effort would have taken us months, preventing us from adding any new
features. That was not an option.

The effort wasn't a complete loss and we were able to walk away with a few wins.
We migrated from [`grunt`](https://gruntjs.com/) to
[`webpack`](https://webpack.js.org/) and moved from dependency injection to ES6
modules. No more managing `<script />` tags by hand and we were able to remove
the circular dependencies we had discovered in the code base during the process.

With these changes came a more organized code base. We sped up developer time
to be able to deliver new features in under a week, and we saw a performance
boost by dropping the page load time by an average of 2 seconds!

There was some success, but we were far from done. A 11 second page load is
still unacceptable. After a couple more months, it was time to try again.

## Try, Try Again

Upgrading our code base to Angular didn't work. Taking the lessons learned, we
decided for our next attempt, we should build something from scratch. We'll take
our new app and just have it live inside of the AngularJS app.

[React](https://reactjs.org/) was pretty well established by the point, and we
heard good things. We dived into React and after a month we had a brand new
react app. All we needed now was to have our new app run next to or inside our
old app. This proved to be more difficult than expected.

At the time we were using a simple AWS EC2 box to deploy and run the one app
and our apis. It was never set up to run multiple sites or urls, and manage the
traffic requests between them. This meant that for our new app and our old app
to run side by side, we'd have to rethink our entire infrastructure. We couldn't
launch our replacement, but we still made strides forward.

![Man carrying a fire extinguisher that is on fire saying "I'll just put this over here with the rest of the fire"](https://media.giphy.com/media/FjhCTrjPaPy6s/giphy.gif 'Yay, more legacy code')

We learned that our DevOps needed a lot of love, and that we needed to address
the scaling problems we discovered. We also loved React and its ecosystem, and
philosophy. Our engineers found it a huge step forward in build better more
complex UIs. React was miles ahead of AngularJS. It was time well spent
learning all of the best coding practices for the new framework.

## Third Times the Charm

After a few months of hard work, our DevOps team came back with a solution.
They had built us a [Kubernetes](https://kubernetes.io/) platform, with Ingress.
We now had the ability to route requests before it hit our main application, and
the tools to deploy all these apps easily and quickly. We could now scale up
from the one app.

With the new and improved infrastructure, it was time to try it again. We
decided to step back, and solve the original problem. We had incredibly slow
pages, and if we were going to rebuild something what would solve that problem?
Let's rebuild our simplest pages, with basic text and pictures, and focus on
making them fast.

We decided to use React and [React Static](https://github.com/react-static/react-static)
to replace our best landers as simple static html pages. After a month, we
built the pages in a new code base, and were able to deploy them on the same
infrastructure as our old app, living side by side in production.

We finally found success!

![Man raising a drink glass to congratulate, with fireworks in the background](https://media.giphy.com/media/10bHcDcPM925ry/giphy.gif 'Congrats! We did it!')

We now had pages that loaded under 3 seconds. Our code was much cleaner and new
developers were able to onboard and be contributing much faster. Each page took
us less than a day to write! We had successfully migrated a portion of our site
off our legacy code!

We had a path forward with our new application. We launched only a couple of our
simplest pages, but we still had the rest of the site to move. To complete the
job, we sat down and came up the plan.

Any time we needed to add a medium to large feature to an old page, we consider
migrating the whole page with the new feature; negotiating the effort with the
Product team. Is this feature big enough to add the time to migrate the entire
page, or do we patch the old code? Do we need to migrate this whole page or
should we wait to redesign and re-evaluate the product features before we
migrate?

## In The End

Overtime we were able to chip away at the legacy code. Migrating each page as we
needed to. This eventually led to converting the site to a Server Side Rendered
React app to support our dynamic content pages. It was a 3 year long process but
as of fall of 2020, we were able to finally delete the last bit of that
AngularJS legacy code!

But with the new app, also came new problems. As we progressed, we had to make
new decisions and changes along the way. Meaning that sometimes we made quick
decisions, or we were still learning some of the finer points of React.

We hadn’t nailed down our brand styles, and kept trying new looks, leaving us
with multiple conflicting design systems; each built using a different library
and method. For most of our dependencies we quickly installed the popular NPM
packages of the day, such as
[react-metrics](https://github.com/nfl/react-metrics) and
[react-loadable](https://github.com/jamiebuilds/react-loadable). While they were
great solutions at the time, they are no longer maintained and will soon break
in future versions of React. This growing tech debt has now affected our site
performance and our page has degraded to 5–6sec page load times.

![Man asking people to calmly disperse, with giant explosions behind him.](https://media.giphy.com/media/joV1k1sNOT5xC/giphy.gif 'Okay so maybe a few more problems')

## The Lessons Learned... Painfully

In the end, we did finally remove a lot of our legacy code that we were afraid
of. Our code quality had improved, but now have accrued new tech debt, that was
starting to effect our site.

But what is tech debt?

> "If you develop a program for a long period of time by only adding features
> but never reorganizing it to reflect your understanding of those features,
> then eventually that program simply does not contain any understanding and all
> efforts to work on it take longer and longer."
> -- Ward Cunningham

Legacy Code, is tech debt that we can no longer pay down. We are too afraid to
fix or pay down that debt. It could be because you never took the time to clean
out the old design systems, or you didn't keep your folder structure updated. It
could be because you never took the time to update the old dependencies. The
tech debt has grown so much, that you no longer understand your own code base.
No longer understanding how any of it works, you become too afraid to change any
of it.

So take these lessons to heart.

It's often easy to blame legacy code on the developers that came before you.
"They didn't know what they were doing" Guess what? You will be that developer
someday, and some other developer will be wondering what you were thinking.

This thinking comes from some idea that you can make that perfect code, but
perfect code does not exist. Code shouldn't be looked at as something permanent
and everlasting. Shown by the journey to update our site, code is instead, a
continual evolution. Its small improvements here and there, gradually building
up to something better than it was the day before.

Don't strive for something that can fix every possible problem, it's impossible.
Instead, fix the problems you have right now, think about the possible problems
in a month, and ignore theoretical problems a year away. You should be prepared
to throw out every line of code you write. Either yourself or someone else is
going to rewrite or delete your code.
