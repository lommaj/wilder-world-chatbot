# Greetings Wilders

Prepare yourselves for a mind-bending ride as we unveil Wilder World Dev Log 1 (DL1)---a raw and unfiltered glimpse into the latest build of Wiami. In our last [Dev Log (DL0)](https://zine.wilderworld.com/dev-log-zero/) we delivered a comprehensive update on the development of Wilder World, Wiami and Wheels Racing. We recorded Frank and n3o's inaugural race on the Walpha Track and took you behind the scenes to various aspects of Wiami's development, including core racing gameplay, track construction, key points of interest, avatars, and procedural systems, as well as introduced the urban plan of Wiami's first neighborhood: Little Meow. We could not be more excited to share the progress made since DL0 three months ago and showcase the incredible work delivered by the Wilder World team.

![](https://zine.wilderworld.com/content/images/2023/06/MetaverseTrilemma.png)

## Metaverse Trilemma

DL1 is a massive undertaking delivered under a new team structure and development pipeline with the primary goal of increasing Performance, Fidelity, and Scale (what we are now referring to as the "Metaverse Trilemma"). We introduce our first core gameplay loop that integrates racing, fuel, and the $WILD token economy. DL1 combines the quality graphics revealed in our January gameplay trailer with the racing mechanics and world map introduced in DL0, and prepares us for our first launch later this year.

You may have noticed in DL0 that the skyline buildings shown were mostly block-outs, Wiami was relatively empty, and the city was only seen from the upper track level. In DL1, we take you into the streets of what is now a live and bustling metropolis with incredible photorealism, performance, and scale. All assets have undergone extensive polishing to offer high performance, while matching the AAA fidelity we envision for Wilder World.

![](https://zine.wilderworld.com/content/images/2023/07/Trinity_02.png)

In-engine screenshot of Trinity Islands

In this Dev Log we provide a glimpse into many of Little Meow's hot spots, including the Hideout, Mushroom Towers, Sunset Strip, Boulevard Promenade, The Qube, GWEI Station, Tranquility Gardens, KIN Resort, Tower Zero, as well as provide a closer look at the Trinity Towers and Spacemind's downtown district. We unveil details on the design language of the Avatar Collection where our character team has been working to cultivate truly expressive, memorable, and human avatars that are uniquely Wilder. These avatars are designed to make you the main character of Wilder World putting you at the center of your experience. Launching later this year, avatars are fully customizable and will be key to experiencing Wiami in the fullest sense.

We have made significant progress in further integrating the ZERO Tech stack into Wilder World to support Web2 and Web3 authentication (login), rewards, ID as well as the zXP Protocol, Zero's on-chain leveling, experience point, NFT staking, reputation and competition system, initially tuned for Wheels racing. There has been extensive progress with our production multiplayer systems. We will be sharing more in subsequent dev logs regarding our plan for massive-scale player concurrency to make Wilder World a fully persistent virtual world.

Leveraging AI in our creative pipelines was an operational emphasis this quarter, while we continue to bet on large scale procedural generation techniques for world building. We believe that the knowledge, lessons and systems built here give Wilder World a significant advantage over larger teams building AAA titles using traditional processes. Below, we include a section dedicated to exploring the systems and procedural tools shaping the immersive experience of Wiami. The results of this build were achieved using a more repeatable, performant, and procedural pipeline, with a focus on moving from early stage development to production level development in anticipation of our first major release. The lessons learned during this milestone were many, the challenges immense, but we believe our results shown here speak for themselves. We remain on track for an early 'token gated' release to a small cohort of players by the end of this year (2023 PST in OBR), with our main launch targeted for 2024.

![](https://zine.wilderworld.com/content/images/2023/07/Mushroom_Tower_02--1--1.png)

In-engine screenshot in Little Meow

Achieving this stage of development stands as a testament to the unyielding dedication and focus of our talented team and the Wilder World community. Our dev logs will continue to be a window into our ever-evolving development process and offer authenticity and transparency for the enigmatic experiment that is Wilder World.

Without further adieu.

NORTH STAR
----------

Our primary focus has remained unchanged: to deliver a photorealistic, super fun and massive-scale metaverse experience with an initial focus on competitive racing inside Wiami. This strategy enables us to create a compelling and engaging initial gameplay experience while we develop Wiami's full open world and action RPG.

In order to set the path for Q2 development goals, we evolved the team structure and development pipeline, a move influenced by Wilder World's new Head Producer - Dennis Crow. With over 15 years of experience at renowned studios such as Blizzard, Ubisoft, and Rockstar Games, Dennis' industry knowledge has been core to guiding our progress. We began the quarter by defining the core principles of the first release of Wilder World, pinning clear development objectives and gameplay loops, optimizing team structures, and sizing development goals into achievable two week sprints.

![](https://zine.wilderworld.com/content/images/2023/07/Fyyzr1TaQAEwXOe.jpeg)

Gameplay shot

### CORE PRINCIPLES

A massive vision like Wilder World can only be achieved by taking small practical steps. This milestone was built around three core themes:

**An Open World with Emphasis on Exploration and Traversal:**

- Wiami is centered around providing players with a vast open world to explore, encouraging a sense of adventure, scale, and discovery.
- The gameplay experience focuses on the joy of traversing the immersive environment, offering exciting races, hidden secrets and quests to uncover.
- Time is a deflationary mechanic in Wilder World. This makes transportation one of our most core and critical gameplay features. This means no portals or arbitrary fast travel. Players must level up in order to traverse to different locations faster.

**Token Economy with Community Ownership:**

- Every in-game asset, from items to vehicles, is represented as a non-fungible token (NFT) on Ethereum and ZNS (ZERO Name Service), granting players sovereign ownership and control over their virtual goods.
- We believe in fostering community ownership, allowing players to freely trade, buy, and sell assets inside and outside of the game ecosystem, creating a dynamic and player-driven economy.
- All transactions inside Wiami and on WWMM happen in WILD.

**Multiplayer Experience:**

- Wilder World is designed to be a social and interactive experience, enabling players to connect and engage with one another in a large-scale, multiplayer environment.
- Whether it's collaborating on quests, competing in races, or simply exploring the world to create meaningful experiences together, our goal is to create a vibrant and thriving citizen body within the city.
- One of the core distinctions between traditional games and Wilder World is player, object, and causality persistence at scale. This means no loading screens, no separate shards, or duplicate world states. Wilder World aims to be one of the first mega-scale persistent universes that demonstrates the idea of the metaverse is possible.

### GAMEPLAY LOOP

Guided by our core principles, the Game Studio embarked on the creative journey of constructing a comprehensive gameplay loop to bring these themes to life. The gameplay loop served as a grounding mechanism for all teams and brought our core principles to life, defining a template for future gameplay loops. Over time, these themes will manifest as a nested set of interconnected gameplay loops, which feedback on one another to enhance immersion, joy and engagement across Wiami.

![](https://zine.wilderworld.com/content/images/2023/06/GameplayLoop.png)

DL1 Gameplay Loop

Here is a quick breakdown of the gameplay loop:

**Get Your Car:**

- Access your personalized Wilder Wheels stored safely in your garage. Wheels can be parked inside private garages like the Hideout, inside your cribs parking garage, or by using public metered parking on the street or at a variety of city parking lots.
- Take your Wilder Wheel on a drive through the open world. Everywhere in Wilder World is traversable depending on your mode of transport. Key points of interest are located throughout the city.

**Find a Race:**

- Make a stop at a GWEI station to replenish your Wheel's fuel source. Fuel is scarce in Wiami and required to power your vehicle. GWEI Stations are conveniently located throughout Wiami.
- Find and accept a race challenge from a Race Terminal at the GWEI Station. Other Wilders can create races using our custom designed race creator to facilitate Community Generated Content (CGC). Any spot in Wiami can become a racing hot spot to create an authentic street racing experience.

**Drive to a Track:**

- Use guided navigation to find the location of the race track. Your Heads Up Display (HUD) and mini-map will guide you to your destination.
- Find your opponent or group.

**Race:**

- Agree to join the race from your HUD interface.
- Start the race.

**Earn & Level Up:**

- Once the race is complete, earn XP and street cred for your participation to level up.
- Celebrate your triumph as you either earn $WILD, your opponent's NFT, or simply enjoy good old fashioned glory (determined by the designated race mode).

### TEAM COMPOSITION

After designing the gameplay loop it was time to get to work. Five core teams contributed to this milestone across five sprints with an additional two week buffer period. Let's breakdown the teams and how they were ultimately structured to meet our objectives:

![](https://zine.wilderworld.com/content/images/2023/06/TeamComposition.png)

Game Studio Teams

- **World Team:** Dedicated to the development for the first two of nine initial neighborhoods on the Island.
- **Wheels Team:** Responsible for implementing everything related to Wilder Wheels, ensuring they embody the desired aesthetics, sound effects, and gameplay mechanics, including drifting and gamepad support.
- **Core Tech Team:** Ensuring deep integration of Wilder World with ZERO---our blockchain-based infrastructure layer. This team is responsible for authentication, security, and facilitating the exchange of NFTs directly from players' wallets, enhancing the game's economic ecosystem.
- **Gameplay Team:** Responsible for building and refining various game systems to enhance the overall gameplay experience. This includes interactions with the GWEI Station, Terminals, car refueling mechanics, elevator systems, and more, adding depth and immersion to the Wilder World experience.
- **Avatar Team:** Responsible for introducing fresh and captivating characters to Wilder World, with plans for an upcoming Avatar drop later this year, allowing Wilders to create unique virtual identities.

Many of these systems have been in development since the inception of Wilder World. This team structure and process enabled us to combine, build and extend key assets and gameplay systems to achieve the desired result for this milestone. The teams and workflows operated dynamically and cross-functionally, with multiple team members contributing to various teams simultaneously. In the event that a shift in focus was necessary, certain teams would allocate their resources to provide support to the team in need. As a result, we established a flexible team structure that allowed for adjustments as required. This dynamic structure strengthened collaboration and facilitated the efficient allocation of resources contributing to the realization of the Gameplay loop. Despite a successful outcome, many lessons and realizations were earned through this process, which will help enhance our processes as we enter our retrospective period and gear up for Dev Log 2.

THE EXPERIENCE
--------------

![](https://zine.wilderworld.com/content/images/2023/07/LittleMeowRoads_v2.3.png)

For this dev log we set out to build key points of interest along the BLVD spawning Wiami's first two neighborhoods---Little Meow and Spacemind. Together these neighborhoods have over a dozen unique points of interest, each of which represent different gameplay mechanics that can be found throughout Wiami. We will continue to add and deepen points of interest across the southern region of the Island by utilizing existing concepts developed over the past two years. As important as the scale of Wiami is, our immediate focus is making these initial neighborhoods as immersive, fun and lively as possible, in order to establish the tone and feel for the rest of the city.

### INTRODUCING FREEDOM WILDER

![](https://zine.wilderworld.com/content/images/2023/06/8_Edited--1-.png)

Freedom in Wiami

DL1 is experienced through the eyes of Freedom Wilder. Freedom is the third original character introduced in the Wilder World lore. Unlike n3o who was born inside the simulation and Frank who hails from FBR (Frank's Base Reality), Freedom is the first character from OBR (Our Base Reality). As the first female character and descendent from OBR, Freedom represents the natural, divine and earthly realms.

With the introduction of Freedom we have completed characters from the first three dimensions that exist in the Wilder World Greater Cosmos (The Trinity---FBR, OBR, and Wilder World). n3o, Frank and Freedom also each represent the three original eras for Wilder World (ERA-1 to ERA-3, respectively) and will guide the lore, art direction and visual language for each of these time periods.

v1 Avatar creator

Freedom is the most advanced development of a character to-date. She was conceived with the help of AI and made entirely with our new avatar generation system (more on this below). All Wilders will have access to the exact system used to create Freedom when The Wilders---our first custom avatar and PFP system---goes live later this year. More details about Freedom will be revealed as the Wilder World story continues to unfold.

### THE HIDEOUT

![](https://zine.wilderworld.com/content/images/2023/06/Hideout.png)

In-game shot of the Hideout sign

Staying true to exploration, traversal and community ownership in Wiami, it felt right to start this gameplay experience underground---at the Hideout. The dev log begins with Freedom taking the access-gated elevator from the street level of Little Meow down into the Hideout. There, she finds her Whyline and jumps in. This vehicle is a Wilder Wheels NFT (License Plate: 0056 0517) and will be the grand prize as part of a [DeQuest campaign](https://beta.dequest.io/realms/wilder-world?ref=zine.wilderworld.com) that the community and partnerships team is running as part of this dev log.

![](https://zine.wilderworld.com/content/images/2023/07/Garage_03.png)

In-engine shot of the Hideout

OGs will know exactly what the Hideout is all about and what's required to gain access to Wiami's most exclusive underground hangout. The Hideout is a private subterranean network of garages optimally located throughout The Island. The Hideout was first spotted in the January gameplay trailer across from n3o's lab in the Trinity Edge district. This is the second Hideout location revealed (Hideout 2), which is situated at the most southern point of Little Meow and provides quick access to The BLVD. Hideout members will be able to travel between Hideouts using a high-speed underground rail system called PANGAEA.

Hideout members will have access to a variety of membership benefits, including:

- Secure underground parking at any location
- Access to private tuning shops for vehicle upgrades, custom paint jobs and customization
- Access to private clothing shops for specialized virtual and IRL merch (only available for purchase as a Hideout member)
- Access to private lounges
- 2x staking benefits when NFT staking goes live

Hideout members also benefit from increased security, preventing possible auto-theft and vandalization in some of the less desirable areas of Wiami. After all, this is Wilder World. Remember to stay SAFU out there.

### **THE BLVD**

After leaving the Hideout, Freedom ventures onto the BLVD where the Wiami sunrise is revealed for the first time followed by the distant silhouette of the Trinity Towers. The time is 7:20 AM with sunlight arriving from the north east.

![](https://zine.wilderworld.com/content/images/2023/06/Untitled--2-.png)

Cruising down the BLVD

The BLVD is inspired by Miami's iconic South Beach Sunset Strip and serves as the nexus between land and sea on the Island. It is a hot spot for cultural events, street races, shopping and nightlife with amazing parks, coastal views and an expansive public boardwalk. The BLVD is the main strip in Little Meow and provides quick access to a number of key locations, including the Mushroom Towers, Neon Kwan, The Qube, The Promenade, Trinity Towers and many more of Little Meow's hot spots. The BLVD starts at the most southern tip of Little Meow and spans all the way to the most northern tip of the Island with various transitions along the way.

Below is another shot of the BLVD at sunrise, showing a glimpse of Wiami's dynamic weather and versatile sky formations. While weather is unique and determined by regional gameplay factors in Wiami, time and day/night cycles are based on the actual time of Miami IRL.

![](https://zine.wilderworld.com/content/images/2023/06/Untitled--3-.png)

In-engine shot of Sunrise in Wiami

### MUSHROOM **TOWERS**

The Mushroom Towers are the first key point of interest shown in DL1 after exiting the Hideout. This ERA-3 masterpiece is the first beach club within Wiami that is available for public and private events. Wilders can enjoy a range of experiences from morning meditations, to engaging salons and wild DJ sets that last until sunrise. As you explore the Mushroom Towers, you'll encounter lush rooftop gardens that offer panoramic views of the BLVD, Wiami Beach, and Trinity Towers.

![](https://zine.wilderworld.com/content/images/2023/07/Mushroom_Tower_02.png)

In-engine screenshot

### **NEON KWAN**

Welcome to Neon Kwan, an ERA-2 set of low-rise commercial buildings situated along the BLVD at Wiami Beach. This is home to a number of different public hangouts, bars, and nightlife, as well as a variety of equipment shops. After perfecting the Wheels racing systems, our team will be working on combat, weapons, leveling, inventory and questing gameplay elements. Neon Kwan will double as a place to hang out, find new allies and gear up before you venture into the wild unknown.

![](https://zine.wilderworld.com/content/images/2023/06/Ima11111ge--1-.png)

NEON KWAN Concept

![](https://zine.wilderworld.com/content/images/2023/07/LowRise_01.png)

NEON KWAN WIP In-engine

### **THE PROMENADE**

The Promenade is the first commercial shopping district in Little Meow, offering curated shops from a selection of vendors, artists and creators, with a particular focus on digital fashion and art. The ultimate goal of the Promenade is to be one of the first retail locations where community members and DAOs can lease space to setup their own shops to sell virtual and IRL goods---think kicks, sunglasses, hats, clothing, and gameplay accessories.

![](https://zine.wilderworld.com/content/images/2023/06/l5kyt5wcy7dvxldu3lse--1-.png)

Promenade concept

![](https://zine.wilderworld.com/content/images/2023/07/Promenade_01.png)

In-engine shot of the Promenade

### **THE QUBE**

As Wiami's first official residence, the Qube has found its home at one of the best corners in Little Meow with expansive views overlooking the Trinity Towers, Wiami Beach and Spacemind's Downtown core. The Qube will come equipped with its own underground parking garage and provides easy access to many of Little Meow's top amenities, not to mention quick access to the Walpha Track. All 108 units of the Qube have undergone a bottoms up redesign and renovation, enhancing both the Qube's aesthetic design and optimization for in-world performance.

![](https://zine.wilderworld.com/content/images/2023/07/Qube_01.png)

In-engine screenshot of the Qube

### TRINITY TOWERS

In DL1 we take a closer look at the three island towers that are collectively referred to as Trinity Island. Trinity Island is a private space for Trinity members---holders of three or more Genesis Industry assets from Wilder World collections. Trinity Island represents a defining motif for Wiami's iconic skyline and plans to be the central gathering point for Trinity holders. It will include spaces for private gatherings, auctions and mints, as well as co-working, podcasting and relaxation spaces, in an environment with breathtaking views of ultimate serenity. Trinity Island will be accessible by two private ferry routes located to both the north and south of the towers.

![](https://zine.wilderworld.com/content/images/2023/07/Trinity_01.png)

In-engine screenshot of Trinity Islands

### GWEI STATION

Welcome to the GWEI Station, where Wilders can fuel up their Crafts, Motos and Wheels, similar to IRL gas and vehicle charging stations. GWEI Stations are integral to the traversal gameplay loop and are a deflationary time mechanic that underpins Wilder World. They enable players to refuel as well as to create an interaction hub where players serendipitously collide, supporting emergent social encounters, new bonds, and fostering communal experiences. This GWEI station is strategically located near the Walpha Track to provide quick access to various freeways for simple traversal to different locations in Wiami. The first GWEI Station architecture is iconic, offering a blended mix of materials, shapes, and greenery, reinforcing the idea of a sustainability and the open fuel economy that powers Wiami.

![](https://zine.wilderworld.com/content/images/2023/06/Untitled--15--1.png)

Racing Terminals are easily accessible throughout the station and enable simple discovery and creation of community-led races that can take place anywhere in Wiami. This creates a powerful Community Generated Content mechanism where Wilders can begin to participate in the creation of player experiences. This is an early test and an integral part of how we will bring community created quests into the fold later in Wilder World's development. To deepen the racing experience, the Gameplay team has implemented various race modes including racing for slips, head-to-head competitions, time trials, and a global leaderboard. In the sections below we will describe how fuel integrates into the core of the $WILD token and NFT economy (Metropolis). This gameplay loop is a fundamental aspect to support the growth, development and maintenance of Wiami as the great migration begins.

![](https://zine.wilderworld.com/content/images/2023/06/Untitled--16-.png)

### TRANQUILITY GARDENS

Nestled on the northern boundary of Little Meow and Spacemind, the Tranquility Gardens encompass a visionary four-tower residential development. This development offers a perfect balance of calm from the surrounding botanical gardens and excitement from the Walpha track that passes directly through the midpoint of the towers. Located at the core of Spacemind's downtown district, the gardens deliver a unique blend of nature and technology with surrounding futuristic megastructures.

### KIN RESORT

KIN is Wiami's first hotel and spa situated along the Walpha Track and eastern beaches of Spacemind. Here we will introduce extended overnight stays as well as a variety of amenities for hotel guests including group meditations, healing sound baths and beautiful co-working zones for tourists new to Wiami. New entrants will be able to take guided tours of Wiami and pair up with experienced Wilders to explore the city and what residency in Wiami has to offer. The various disk towers also serve as some of the best viewing locations for official racing events---including W1---which will kick off in on the Walpha Track in 2024.

![](https://zine.wilderworld.com/content/images/2023/07/KIN_01.png)

In-engine screenshot

### TOWER ZERO

We have completed the design and initial construction of Tower Zero. Tower Zero will serve as a primary headquarters for members of the Zero Team and is home to n3o's apartment, lab and particle collider seen in the January pre-alpha gamelplay [trailer](https://www.youtube.com/watch?v=SnFPK5nlR2Q&ref=zine.wilderworld.com). The goal is to utilize this as a space for remote collaboration and work inside the metaverse later this year, as we test the metaverse as an alternate place where work can happen, outside the bounds of a traditional office IRL.

![](https://zine.wilderworld.com/content/images/2023/06/n3o_tower_RS_41.jpeg)

TOWER ZERO Concept

![](https://zine.wilderworld.com/content/images/2023/06/n3o_tower_RS_42.jpeg)

![](https://zine.wilderworld.com/content/images/2023/06/n3o_tower_RS_43.jpeg)

![](https://zine.wilderworld.com/content/images/2023/06/n3o_tower_RS_44.jpeg)

![](https://zine.wilderworld.com/content/images/2023/06/n3o_tower_RS_35.jpeg)

![](https://zine.wilderworld.com/content/images/2023/06/n3o_tower_RS_34.jpeg)

### DOWNTOWN SPACEMIND

During our next Gameplay Trailer we will be revealing and driving through Spacemind's downtown core, unveiling the epic views of the Little Meow cityscape as well as views to the north, east, and west of the Island. We have put a lot of love, sweat and tears into creating an iconic skyline that integrates ERA-2 and ERA-3 architecture, juxtaposing an alluring and sprawling natural wilderness.

![](https://zine.wilderworld.com/content/images/2023/07/Race-Track-Hero-Shot-Concept.jpeg)

Paint over of an In-engine screenshot

SYSTEMS
-------

### WILD FUEL ECONOMY

![](https://zine.wilderworld.com/content/images/2023/06/WW_FUEL_PRICE_BOARD_06.jpeg)

Fuel Tracker Concept

We have made significant strides towards supercharging the $WILD token economy. This is not a metaphor or hyperbole; we are talking about the integration of physical and virtual energy in the truest sense. There are three primary challenges we wanted to solve to create a sustainable token economy for the Wilder Nation:

1. **Real Utility:** Many tokens masquerade as having utility when in fact they offer no meaningful use over more liquid and widely held currencies (such as USD, BTC and ETH). We want to ensure $WILD is tightly coupled to the operation of the metaverse itself, that it is highly differentiated from other tokens, and generates real value to those who choose to utilize its productive power.
2. **Real Cost:** The closer an instrument is valued relative to its underlying base resource cost, the more defensible the value of the instrument. When you purchase gold, you are purchasing latent energy that can be converted into goods far into the future. When you purchase oil, you are purchasing a commodity that can be converted into productive energy and metabolized by an existing network of global supply chains. When purchasing BTC, part of what you are paying for is the cost of the underlying energy required to perform the computational work necessary to secure the Bitcoin network. Valuable commodities are backed by tangible value IRL. Many cryptocurrencies today are backed by no underlying resource and generate minimal productive capacity, acting as an unnecessary intermediary between users and computational resources.
3. **Real Incentives:** Staking alone is not a sustainable incentive to build a real economy. Staking as it relates to most tokens can be looked at as a way to pay token holders to not sell their token, creating the illusion of limited supply beyond the actual productive capacity of their economy. In healthy economies, people convert currencies into goods and services that enhance and expand the breadth and usefulness of what is available within that economy. Real incentives encourage investment to build, grow and sustain economy (and in ideal conditions make life better). In the case of currencies, their goal should be to enable growth and abundance over scarcity. If rewards are distributed to everyone equally without an adequate mechanism for allocating scarce capital on a relative effective basis, the economy will eventually just collapse in on itself. We've seen this with many of the early token protocols and Web3 games. Real incentives encourage money to flow productively.

![](https://zine.wilderworld.com/content/images/2023/07/klffce6sssknyg0hju9k.png)

One of the unique benefits of Wilder World and the metaverse compared to many existing cryptocurrencies are:

1. **Experiential Value:** In the most basic sense, Wilder World is creating a game that we believe will become significantly better than what is structurally possible within traditional games. Gaming is already the largest segment of the entertainment industry, eclipsing movies, music and live events combined. The metaverse further accelerates this paradigm by bringing the medium of gaming to large segments of the existing economy, such as big tech, communication, education, finance and possibly even the governance of new nation states. Irrespective of an extrinsic token economy, Wilder World must stand on its own as a fulfilling experience that people are willing to spend time and money on. This same path does not exist for many of the crypto use-cases and NFT projects we've seen to date.
2. **Virtual Ownership:** The current construct of NFTs is closer to art or gambling than physical goods, services and infrastructure. Art represents a small fraction of the overall economy. The enablement of virtual goods opens a new paradigm of experience, where assets can be used both for entertainment and productive capacity in virtual worlds. In theory these assets should be significantly more useful than the existing category of NFTs, most of which do not exist or are incapable of existing within a complex and useful virtual environment. They will pivot, but doing so is not easy in the context of a complex game environment with years of necessary development.
3. **Non-extractive Productivity:** As we continue to experience environmental issues and resources become limited within the physical world, it is possible we move to a form of non-extractive capitalism, where individuals and DAOs can create value at a lower marginal and ecological cost compared to current economic models. This could accelerate climate goals and support with global sustainability, and possibly lead to new forms of meaningful creative and intellectual productivity.

In short, making Wilder World enjoyable, introducing the capacity for real virtual ownership, and creating opportunities for wealth creation using non-extractive forms of productive capacity could create a systemic shift in global economy and human flourishing.

We believe we are in the middle of this shift and that it will enter its next phase with the useful convergence of artificial intelligence, blockchain, and XR. Despite advancements being made in these fields however, it is not possible for existing game studios and franchises to integrate at the rate and cost technology is developing at (e.g., $60 for a game). AI, L1/L2 crypto-transactions, GPU streaming and massive virtual concurrency/persistence are novel technologies that require significant expertise that fall outside traditional industry bounds. These technologies have a real cost in terms of units of underlying energy and compute, and therefore are economically infeasible for traditional games to rapidly adopt. Crypto will be the natural enabler.

![](https://zine.wilderworld.com/content/images/2023/07/Economy--1-.png)

When designing the next version of WILD's token economy, we integrated three critical layers that address the challenges and opportunities stated above:

1. **Real Utility → Integrated Gameplay:** It is important that gameplay loops are natural and do not interrupt immersion within the Wilder World experience. Adding paywalls and in-game transactions can disrupt gameplay, limit fun and detract players. It was important for us to find a way to generate value for the $WILD economy in order to cover the costs of operating the simulation, with the aim of also making Wilder World free to play, while preventing a pay-to-win economic model. Players should be able to start with nothing and earn their way to the promise land through skill, persistence and calculated risk-taking. It is important the game is fun and the economy can exist seamlessly when playing the game (while also managing a minimal inflation rate). In this dev log we unveil the vehicle charging and GWEI station gameplay loop, which elegantly ties gameplay directly into the $WILD resource economy. Players will be able to earn fuel in Wiami, but if they do not use their time productively they will need to pay at the pump with capital from outside the game. New players will be free to walk around for free (or ride bikes or skateboards), but those wanting to play the game at a higher level will need to engage within the economy and find a way to get involved. This is the first of many gameplay loops that will directly connect WILD to the gameplay experience, and will serve as a core game design mechanism as we build out Wilder World.
2. **Real Cost → Energy Abstraction:** At the core, in-game blockchain transactions, GPU streaming, AI powered NPCs, and many more aspects of running the simulation require energy. Similar to Ethereum's GWEI, which is a cost abstraction charged in Ether that represents the amount of gas needed for underlying network computational operations (transactions), we are working on an abstraction that packages all of the costs associated with running the Wilder World simulation. This grounds our token economics in real world costs (compute) and enables us to leverage cutting edge technologies to create a superior experience than is economically-feasible within traditional games. Similar to Ethereum, energy costs will fluctuate based on the network load of Wilder World as well as be impacted by a players individual settings (e.g., graphics quality, AI complexity, etc.).
3. **Real Value → Creative Value Generation:** The most interesting aspect of Wilder World may eventually be the ability for creators to earn real world income by leveraging their creativity with community generated digital content. This content should enhance gameplay, experiences and the productive capacity of Wilder World, reinforcing the tenants of a healthy, useful and productive economy. We plan to do this by creating a free market within Wilder World, governed only by the physics and technical limitations of our underling technology stack. Players should be incentivized to grow and improve everything about Wilder World and reap the benefits of doing so.

**To summarize, our strategy related to $WILD's fuel economy in six points:**

1. All transactions in Wilder World happen in $WILD.
2. Fuel is a global cost abstraction that enables the real-time pricing of all associated cost inputs required to power the Wilder World simulation.
3. Fuel pricing is dynamic, based on the underlying network, compute and technological costs to operate the world.
4. Wilder World will be free to play, but higher energy activities will integrate fuel as part of the resource model.
5. It will be possible to earn fuel, but one must use their time productively to do so (just like IRL).
6. Our intention is that all core gameplay loops tie back to the underlying energy required to operate the latest technologies with limited compromise, enabling the creation of a superior experience by leveraging a structural advantage over traditional gaming models.

### AVATARS

![](https://zine.wilderworld.com/content/images/2023/06/Untitled--8-.png)

![](https://zine.wilderworld.com/content/images/2023/06/AvatarPoster_01--3---1-.png)

![](https://zine.wilderworld.com/content/images/2023/06/AvatarPoster_01--2---1-.png)

![](https://zine.wilderworld.com/content/images/2023/06/AvatarPoster_01--4---1-.png)

Original Posters for The Wilders

Introducing our game-ready custom 3D character creator will allow for a wide variety of customizations from hairstyles and facial features to outfits and accessories that directly plug in to Wilder World as your personalized avatar. Our Avatar Team has been creating dynamic content, including everything from the character base meshes, to clothing and accessories utilizing the latest Metahuman pipeline for ease of integration into UE5. The Wilder character creator will be the tool used by the community for our main PFP collection titled 'The Wilders'. More details will be shared later this year.

v1 Avatar Creator in action

It is important to note that the creation of the Wilder World Avatars have required a unique design mindset. We are aiming to blend the world of profile picture (PFP) customization with game ready avatar customization. From a design perspective, we have gained valuable insights using AI-generated concepts as inspiration and building out 3D models that we can procedurally iterate on from there.

![](https://zine.wilderworld.com/content/images/2023/06/FrankWilder_Portrait_of_a_Futuristic_Mexican_Bandit_with_irides_0e136e97-8a72-4a12-9ab5-65dad5f42fe1.png)

![](https://zine.wilderworld.com/content/images/2023/06/FrankWilder_Close-Up_Portrait_of_a_male_futuristic_Cyber_racer__0ef94e2e-e684-458b-ba62-f02b3697dd25.png)

![](https://zine.wilderworld.com/content/images/2023/06/FrankWilder_Close-Up_Portrait_of_a_asain_male_futuristic_Cyber__d01973cc-a3e2-4e7c-a22c-e3e8b55df2ad.png)

![](https://zine.wilderworld.com/content/images/2023/06/FrankWilder_Portrait_of_a_Futuristic_Lebanese_Female_with_glowi_54d3923d-5b2e-4f63-bc00-d88da7a23232.png)

![](https://zine.wilderworld.com/content/images/2023/06/FrankWilder_Portrait_of_a_Futuristic_Mexican_Bandit_with_irides_27b03604-8cd1-4700-8dad-fb3d82fdad19.png)

![](https://zine.wilderworld.com/content/images/2023/06/FrankWilder_Portrait_of_a_Futuristic_Lebanese_Female_with_glowi_6a84f94b-4dfd-4cb1-aa35-affee7f6af5c.png)

![](https://zine.wilderworld.com/content/images/2023/06/FrankWilder_Portrait_of_a_Futuristic_Mexican_Bandit_with_irides_975cdbd7-29d6-4105-8248-05c5eacef9c9.png)

![](https://zine.wilderworld.com/content/images/2023/06/FrankWilder_Close-Up_Portrait_of_a_male_futuristic_Cyber_racer__fb759d74-08cd-41a5-8306-e34238a4b6d4.png)

![](https://zine.wilderworld.com/content/images/2023/06/FrankWilder_Portrait_close_up_of_a_Futuristic_Asian_male_with_g_57494e88-89a1-425f-88a5-a00bc935b371.png)

AI generated concepts

The Avatar team placed significant emphasis on further building out the character design language and lore for Wilder Avatars. A key objective was to establish unique styles that accurately represented each era, ensuring clear aesthetics that defined their respective time periods. To achieve this, the team utilized AI and procedural generation techniques to inspire and develop design concepts. Utilizing AI has sped up our character workflow and allowed us to generate a wide variety of concepts. Though no single AI concept feels 'perfect' based on the principles of each character era, there have been cool details we've been able to pick and pull together to create an entirely novel story for the main characters in Wiami.

> YOU ARE A WILDER. YOUR MISSION IS TO PROTECT WIAMI AND EVOLVE.

**ERA-1: The Remembering - 1900 - 2100**

The era of the individual in Wilder World, where racers forge their own destiny, driven by ambition and an unwavering hunger for triumph. Within the streets of Wiami, their stories unfold, navigating a complex political landscape and confronting challenges that test and reshape their identities.

![](https://zine.wilderworld.com/content/images/2023/06/FrankWilder_hyper-realistic__editorial_portrait_of_a_indian_fem_755eee0b-d754-42e6-a9cc-437fd70fb962--2-.png)

ERA-1 Concept

**ERA-2: The Rendering - 2100 - 3000**

In the era of advanced bionic humans and sentient AI beings, a new era of teamwork emerges, as renegades and outcasts seek solace in collaborative efforts. Boundaries blur and traditional notions of alliances and adversaries are defined, as you navigate a complex web of corporate mercenaries, cooperative ventures and fierce rivalries, all with a shared purpose: to thrive in the face of adversity.

![](https://zine.wilderworld.com/content/images/2023/06/FrankWilder_Portrait_of_a_Futuristic_Mexican_Bandit_with_irides_ce1dd564-c13f-49b0-99ed-5b0021db79e5-1.png)

ERA-2 Concept

**ERA-3:  The Realizing - 3000+**

In the era of harmony, Wilder World flourishes as a solar punk protopia where humanity and nature intertwine. Here, Wilders celebrate unity and well-being, harnessing advanced technology and sustainable living to create a collective paradise. Together, they embody the transformative power of collaboration and the inherent strength found in the harmony of all beings.

![](https://zine.wilderworld.com/content/images/2023/06/FrankWilder_Portrait_of_a_Female_with_bioluminescent_sacred_geo_35cc58eb-0d4e-473f-9032-08591c0968211--3-.png)

ERA-3 Concept

The Wilders are set to launch by the end of this year using a novel mint mechanism we are calling an 'Emergent Mint'. Players will select and customize their character based on a number of unique variables, and then be permitted to select different accessories that are defined by a rarity algorithm. At the end of the process the player mints their very own avatar on-chain, while the NFT collection rarity and distribution emerges as a combination of all participants individual choices. Together, the initial 9,999 characters of Wilder World will be defined and created by our community and seared onto the blockchain for eons into the future.

### **VEHICLES**

The Wheels Team has made several significant upgrades to Wilder Wheels. The team placed a heavy emphasis on optimizing the Wheels in various aspects such as visual aesthetics, auditory experience, vehicle handling, gamepad compatibility, visual effects, seamless enter/exit animations, and the implementation of camera effects. There is still a significant amount to do here, but this is a significant improvement. In terms of visual appeal, the team remodeled each player vehicle, aiming to achieve Wilder photorealism. This involved attention to detail, covering everything from color schemes to intricate components like grills, headlights, rims, bolts, nuts, materials, logos, and more.

![](https://zine.wilderworld.com/content/images/2023/07/Garage_01.png)

Remodelled Whyline

In this Dev Log we chose to use a Whyline inspired by Japanese street racing culture and an old school retrofitted Wontiac to represent pure American muscle. You can see the improvements made below between the previous car models and new ones.

![](https://zine.wilderworld.com/content/images/2023/07/brlyixkyrt2y12uava70.png)

![](https://zine.wilderworld.com/content/images/2023/07/ezlgea6kuinzwee5qsqy.png)

New Wontiac Mesh and Rims

![](https://zine.wilderworld.com/content/images/2023/07/f8cgbozntoesfbkhzibp.png)

New vs. Old Wontiac

Related to vehicle handling, the team introduced updated racing physics including drifting, while also fine-tuning suspension updates and optimizing acceleration and braking mechanisms tailored to the unique characteristics of each vehicle model. The wheels team also introduced our first version of vehicle destruction, allowing for real time damage on in-world collisions with your Wheels. We are using the latest advances in real-time vehicle destruction physics, where the engine actually deforms the mesh of the vehicle based on collision physics. Traditional games like Grand Theft Auto 5 use clever mechanisms to swap meshes for different damage levels. From the video below you can visualize how meshes are actually deformed and impacted in real-time. Next we will begin to introduce VFX and destruction rules for different types of objects within Wiami, and then roll this system out to all vehicles.

Due to the significant number of unique vehicle models in the Wheels collection (120+), we had to find a smart solution for vehicle related character animations. Keep in mind, animations must account for numerous possibilities, such as cars positioned at various angles (including on inclined surfaces) or scenarios where exiting may occur without a stable ground surface. To overcome this challenge, the team successfully integrated procedural animation systems, allowing singular animation code per car type. In real time, this animation system dynamically adapts the character based on the specific car being utilized and the surrounding environment. This system will save countless hours when compared to traditional game development.

0:00

/0:13

1×

Get in animation + destruction

The implementation of on-chain mechanisms was pivotal to ensure the accurate spawning of Wheels based on the information pulled from the blockchain. After all, everything in Wilder World is an NFT and your Wheels are no exception. This integration required the collaboration of multiple teams, as the tech stack involved was highly intricate and built completely from scratch with the ZERO Protocol Team. The process aimed to provide a smooth experience, starting with blockchain authentication using the player's wallet credentials. Subsequently, the player can load their owned NFTs into the game, which then spawns the corresponding NFT asset into the game environment.

### AI **CROWDS**& TRAFFIC

This system not only encompasses humanoid characters but also includes diverse entities such as BEINGs, GENs, and Wapes, effectively populating the city with a variety of life-like beings.

0:00

/0:44

1×

Crowd system in Wiami

We've placed great emphasis on bringing the open world of Wiami to life through the implementation of a realistic traffic system. To effectively handle the multitude of entities in the city, we implemented a sophisticated mass entity system. This system allows us to efficiently manage and simulate the behavior of vehicles throughout the entire city. Implementing these systems comes with many challenges, particularly in relation to computing resources and performance. Creating believable traffic patterns involves taking into account various factors such as time of day (e.g. rush hour), different types of vehicles, and the interactions between vehicles, players and pedestrians, which all change based on network load. We adopted a comprehensive approach that combines multiple techniques, including Procedural Traffic Data Generation, UE5 Drive Optimization for Rendering, and Multithreading of Computing Resources. By combining these elements we are able to create a vibrant open world with realistic traffic that is highly performant across a life-scale virtual city.

Real time traffic

### **PROCEDURAL CITY GENERATION**

By utilizing our intelligent procedural system, we are able to efficiently generate roads and buildings, achieving hyper-scale, efficiency and customization. The street grid acts as a frame for each plot, giving clear guidelines for street level podiums and block-outs. We can then apply repeated kits of game-ready building tiles to maintain performance. From there, we can layer in different set dressings and street props to further bring the city to life. Additionally, this design promotes meaningful scalability of our work. The implementation of a procedural framework allows for seamless coordination and enables the entire Wilder game studio to follow a systematic process.

Procedural Generation in Little Meow

![](https://zine.wilderworld.com/content/images/2023/07/RTKITS.jpeg)

![](https://zine.wilderworld.com/content/images/2023/07/PANELS_KIT.jpeg)

Game-ready tiles

![](https://zine.wilderworld.com/content/images/2023/07/MODULAR_AD_03.jpeg)

Created with game-ready tiles

### **GAME READY PALS**

The PALs Industry currently consists of GENs and BEINGs, both of which have followed the same automated process to become game ready assets. Each character is procedurally generated at high poly quality with Houdini. Once created, the geometry is then converted into a VDB (Voxel Data Base) cloud which is manipulated by SDF (Signed Distance Fields) to adapt to the original geometry. This voxel field is then converted back to a polygonal mesh. It is this process that gives a nice uniform base mesh to be further optimized. The newly made base mesh is then quad re-meshed to remove any possible inconsistencies in the previous processes. After this process a BEING goes from about 10 million polygons to just 20 thousand polygons and a GEN goes from about 3 million polygons to just 8 thousand polygons.

0:00

/0:24

1×

![](https://zine.wilderworld.com/content/images/2023/06/230628_RacingDemo_GENOptimization.png)

![](https://zine.wilderworld.com/content/images/2023/06/230628_RacingDemo_GENMaterialSeparation.png)

GENs in engine

The next steps are to capture data from the high-quality original character and have them reinterpreted as texture maps on the newly made optimized geometry. These textures consist of colors and normals that are baked down onto a flat UV map of the low poly character. The last very important step is to create a material separation mask which is a single UV-based map which determines where different materials go on the low poly character. The optimized and game ready character is then imported to Unreal Engine as a skeletal mesh which is attached to a UE bone structure with all its materials applied and ready to go. This entire process creates a lightweight low poly character that is visually represented in engine with all the details of the original design.

![](https://zine.wilderworld.com/content/images/2023/06/230628_RacingDemo_BEINGOptimization.png)

![](https://zine.wilderworld.com/content/images/2023/06/230628_RacingDemo_BEINGMaterialSeparation.png)

PALs in engine

### **PROCEDURAL SIGNAGE GENERATOR**

The signage generator is created via Houdini and implemented into Unreal Engine as an in-Engine tool but also can be used to export static mesh signs standalone direct from Houdini. The base of the tool starts with two primary inputs: a font style and written text. The text can be in any language and even be symbols. The tool then interprets the text input in the specified font and traces the text as an extruded mesh geometry in two layers - solid and light emitting. There are multiple styles of the base text geometry outputs possible covering ranges from neon tubes to backlit panels. After the base text geometry is created there is a variety of other options and settings to stylize the signage such as backplate designs, various connection hardware, wires, and auto generated adaptive structures behind. Each component of the sign gets its own material slot for further customization. The signage tool allows for a very wide range of signs to be created with simple and easy to use controls.

Houdini Digital Asset Generator

### PROCEDURAL PROJECTION GENERATOR

The projection screens are generated inside Grasshopper3D using plugin called Pufferfish. Pufferfish is a tool for shape blending and morphing. With this tool a collection of simple mesh screens in various patterns were made. These simple and lightweight mesh screens can be applied on the faces of buildings in Unreal Engine and use animated emissive materials to act as a kind of projection screen light show on the building.

### PROCEDURAL HOLOGRAM CREATOR

Holograms are generated with Houdini and source input MidJourney images. First MidJourney images are generated based on what we want the hologram to be. In Houdini this image is read and deconstructed into a series of mesh strips to give a striated hologram effect. The image colors are then interpreted and applied as mesh textures varying in emissive qualities. The mesh and its new emissive texture are then imported into Unreal Engine and can be placed where necessary.

![](https://zine.wilderworld.com/content/images/2023/06/230628_RacingDemo_ProceduralHologramGenerator_01.png)

![](https://zine.wilderworld.com/content/images/2023/06/230628_RacingDemo_ProceduralHologramGenerator_02.png)

WIP Hologram creator

### PROCEDURAL BUILDING GENERATORS

There are various sets of procedural building generators via Houdini currently in use. These generators are fully procedural in that all the parts as well as their assembly into a full building is a full procedural process. In general, there are two kinds of generators, one is for ERA-2 style design and one is for ERA-3 style design. ERA-2 is more hard surface and angular shaped with tech and mechanical details, while ERA-3 is more clean smooth curvature and flows. Each generator first creates the pieces of the kit that will be later assembled. Through various automated modeling processes simple volumes are cut, bent, beveled, joined, etc. to carve out the result shapes. Lastly, a layer of detail is added to the parts through automated batch processes. Each part is fully optimized, and material separated from the start to ensure we only have higher polygon counts where it matters such as areas of curvature. After all parts have been generated, they are passed through an assembler system which takes the parts and combines them in various ways to make infinite variations of buildings within the specific style. The resulting building assemblies are then imported into UE with their materials pre-assigned and ready to go.

Procedural building generator

![](https://zine.wilderworld.com/content/images/2023/06/230628_RacingDemo_ShiftV2_02.png)

![](https://zine.wilderworld.com/content/images/2023/06/230628_RacingDemo_ShiftV2_01.png)

![](https://zine.wilderworld.com/content/images/2023/06/230628_RacingDemo_ShellV2_03.png)

![](https://zine.wilderworld.com/content/images/2023/06/230628_RacingDemo_ShellV2_02.png)

ERA-2 Procedural buildings

### PROCEDURAL OVERPASS GENERATOR

Roads and overpasses are a core part of any city. This tool allows for the flexibility to edit these systems by way of simple curve manipulation in which all attached systems adapt. With this system a curve can be drawn in Houdini to trace the path of the overpass system and all the corresponding geometry is generated along this curve in real time. This geometry includes roads, lanes, dividers, sidewalks, barriers, structures, on ramps and any other elements that may be needed. Editing the base curve shape adjusts all the overpass geometry and elements along with it in an adaptable way. All elements such as streetlights or barriers can be swapped out and replaced by other styles of that object on the fly. This allows the game artists to only have to worry about where the overpass is going without having to manually adjust all the correlated components which make up an overpass, saving countless hours of development time.

Overpass generator

**INTERFACE**
-------------

In DL1 we enhanced the gameplay loop with a simplified and more immersive user interface. We are still in the early days of HUD and interface exploration. Our main objective at the moment is to ensure controls are easy to use and flow nicely within the context of game usage, with the intention of increasing visual fidelity, fluidity, and futurism overtime. Before the design phase we carefully mapped out the process of creating a race and accepting a race, which further helped us define what interactions were needed to support the player's actions. Below are three of the main interfaces we created for this gameplay loop.

The Quest Journal is a valuable tool that allows players to track quests they've previously picked up from the GWEI Station and have also completed.

UI for Quest journal

The Car Racing HUD received a revamp to give it a clean, minimal and more futuristic design, creating more immersion for player racing.

![](https://zine.wilderworld.com/content/images/2023/06/HUD.png)

The Quest Terminal is used for picking up or posting racing quests that players have created. These terminals are present at every GWEI Station and act as the central hub for picking and finding fun races throughout Wiami.

![](https://zine.wilderworld.com/content/images/2023/06/Untitled--9-.png)

Quest Terminal

Figma was used to initially design and prototype every screen, which were then delivered to the Gameplay team for implementation in-engine. We used Adobe After Effects to convey motion graphics across various animations for the UI.

SOUND
-----

The auditory aspect of Wilder World is a vital component in enhancing the overall gameplay experience. This encompasses crafting the music and score to suit different settings, capturing the authentic sounds of cars including engine noises and ambience, as well as ensuring immersive character movement and environmental soundscapes. As Wilder World is being constructed from the ground up, the soundscape is being meticulously created from scratch to ensure a truly unique and immersive auditory experience for Wilders.

New Wilder World Score - The Hideout

0:00

/2:00

1×

### VEHICLE AUDIO

Since racing takes the center stage for this development cycle, the audio team had to handle what is considered one of the hardest parts of game audio: Vehicles. Wilder World utilizes sample-based procedural audio approach for its vehicle audio systems. Using the power of procedural audio generation in Unreal Engine's high performance audio system Metasound, our systems process and manipulate sound based on game logic without relying on external middleware. As a result, the audio for the engine is reactive to vehicle load, limiter RPM and the chassis response to wind and environment particles as it encounters higher speeds to give a sense of speed and rush.

0:00

/0:21

1×

Isolated Wind sounds for vehicle reacting to speed

For the tires, currently, our audio system handles 12 unique surfaces from asphalt to grass to shallow water, each with their own set of sounds, for that added layer of immersion. Each tire handles its own audio, which means, the audio is accurate even in cases where the vehicle banks across borders of surfaces or when the vehicle is on two of its wheels doing a side wheelie.

0:00

/1:11

1×

Isolated Tire sounds across different surfaces

### ENVIRONMENT AUDIO

Wilder World is a world of the future and a huge part of the world is the environment. From bustling landscapes to beautiful buildings to amazing cars and all avatars, everything makes it the place it is. The goal of the team with environment audio is to make sure this life comes across wherever it is being heard from.

Currently under development is our dynamic environment audio system which consists of emitters carrying audio tailor made for various zones of the city, which follow the perspective of the player and dynamically calculates the position of the sound emitter of each zone. So whether the player is approaching an iconic beach or passing by a beautiful monument, you will hear it coming.

0:00

/1:33

1×

Dynamic Environment Audio System

In order to ensure performance optimization, the algorithm for the dynamic emitters has been made so as to change the location update relative to the distance from the player location. The greater the distance, the slower the refresh rate for the emitter location.

All our audio systems are made with the goal of pushing the boundaries of audio immersion in virtual experiences. Our dedication to capturing the essence of realistic vehicle audio, dynamic soundscapes, realistic vehicle interactions, adaptive audio systems, and adrenaline pumping soundtrack aims to transport you into an experience like no other.

GUILD
-----

The Wilder Guild is a public art initiative inside Wiami. Think statues, monuments, murals and more. The Guild brings us full circle to the seed of Wilder Worlds inspiration, supporting artists and making Wiami culturally rich. We currently have 10+ amazing artists lined up including Fesq, Vacades, MrEgfx, Spizak, Skeeva (pictured below) who have submitted artworks and are in queue to mint their work.

![](https://zine.wilderworld.com/content/images/2023/06/fesq.0033.jpeg)

![](https://zine.wilderworld.com/content/images/2023/06/mooonstill.001.png)

![](https://zine.wilderworld.com/content/images/2023/06/NewLevelSequence.0238--1-.jpeg)

![](https://zine.wilderworld.com/content/images/2023/06/round.0265.jpeg)

![](https://zine.wilderworld.com/content/images/2023/06/Skeeva--1-00-07-11-.png)

The goal is to have the Guild launch and initially operate as a low touch activation for the Wilder team and community. We will wait until the contract isolation is carried out to start minting Guild artworks on the new Wilder Guild contract. There won't be any formal schedule, but the plan is to carry out Guild artworks as 1/1 auctions happening every month, with the corresponding digital asset being strategically placed in Wiami at a permanent location.

WHEELS RACING
-------------

The Wilders have been dedicated to delivering the best Web3 racing experience. The concept of Wilder Wheels racing has transcended, as we have successfully conducted our first end-to-end test. This involved racing Wheels in Wilder World and executing all the necessary wallet actions on the blockchain. For the historical record, check out the Ethereum Goerli transaction for the first successful race-for-pinks claim-to-win within Wilder World by following this [link](https://goerli.etherscan.io/tx/0x422f08cd9535a1636ee1ac8196083914902888139af3caeafd0d139d1e9ef102?ref=zine.wilderworld.com).

Wheels racing incorporates an efficient and scalable Web3 system that prioritizes a seamless gameplay experience. As part of the zXP section that follows we illustrate the on-chain logic and tests resulting generated from different types of racing modes.

As part of initial racing, we will be supporting multiple different racing modes that will launch during different phases:

1. Racing for XP (experience points only)
2. Racing for slips (high stakes)
3. Racing for WILD (earn WILD)
4. Racing heads up (heads up)
5. Racing tournament style (circuit)
6. W1 Racing (Formula 1 style seasonal event)

#### /* WWRacing test sample

Wheels racing will be one of the first modules to be loaded into our game contract environment, zXP.

### zXP - LEVEL UP

zXP introduces a Web3 native game environment where players are rewarded with experience points, tokens and NFTs. This completes the stat system for Wilder World NFTs, as it encompasses on-chain stats, leveling mechanics, engaging gameplay and rewards.

To ensure fairness and consistency, rewards are standardized across all games and players within the environment. The contracts are structured into seasons, enabling the preservation of each game's intended immutability and reward distribution while allowing for future upgrades and enhancements.

#### /* zXP Season 0

### PLAY WITH STAKES

To start earning XP and unlocking item rewards through your NFTs, the first step is to equip them onto your avatar. By equipping NFTs, your avatar's stats and abilities dynamically change. This includes granting access to different areas of Wiami. To efficiently manage equipment, secure rewards, and other essential gameplay systems, zXP offers a robust staking mechanism for your NFTs.

#### /* NFT pool staking S0

### PROGRESSION

Once a season's contracts are released, they are set in stone and cannot be altered. However, the deployment of new seasons are accompanied by fresh sets of contracts. Players have the option to progress and advance to the latest season. As they move forward, they are granted the emitted season rewards as a token of their progression and achievement.

It's worth noting that even as new seasons are introduced, each previous season remains fully accessible and playable, allowing players to revisit past content and continue their Wilder World journey at their own pace.

#### /* zXP Season 1

### EARN

This token economy creates a dueling incentive mechanism where hanging on to legacy NFTs can be valuable, but so is advancing. The immutability ensures that the games and characters you enjoy playing the most won't be nerfed or patched out, and will retain their practical value. While the season advancement also allows Wilder World and the community as a whole to end games, earn rewards, level up, and move on to new content.

#### /* Season rewards

After nearly two years of design and development, this is just the beginning of zXP and illustrates the endless possibilities for different on-chain game modes and mechanics. We are excited to put many of these ideas into practice, test them with real stakes, and learn and evolve, to create the most dynamic, engaging, and competitive Web3 gaming experience.

CONTRACT ISOLATION
------------------

We executed a successful Wheels DAO proposal that can be viewed [here](https://snapshot.org/?ref=zine.wilderworld.com#/realblackbook.eth/proposal/0xf63f9364fa9acd05614d44050bb541f72ed6071c6a2a9b5dd609e5661271cb36). The proposal was in favor of isolating 6 of the 7 NFT collections on the main [Wilder World NFT contract](https://opensea.io/collection/wilderworld?ref=zine.wilderworld.com) into separate collections and leaving Wilder Wheels on the original contract address. There was 97 total voters, with a final tally of 419 votes in favor and 3 votes in opposition.

Collections to be isolated include:

- Wilder Cribs
- Wilder Crafts
- Air Wild Season 0
- Air Wild Season 1
- Wilder Guild
- WOW Poster 0

Benefits of Isolating Collections include:

- To enable proper DAO voting for all NFT industries.
- To simplify browsing specific collections, easily compare like assets when collecting.
- To enforce royalties through updated contracts, benefiting industry DAOs.
- Easy identification of Genesis assets and collections for Trinity snapshots and future rewards.
- NFTs will be renamed to follow the naming convention of other WW collections (IE: Wheel #369).

Execution Information:

- We are currently in motion for the isolation plan and will continue to keep the community updated on proposal execution.
- The mechanism will be to Burn and Swap by updating the current NFT media to indicate the need for an upgrade. We will then use admin rights and the upgrade function in the contracts to burn existing NFTs and reissue them on new collection contracts.
- The Wheels industry DAO would be responsible for covering the cost of the contract updates. These funds would be removed once the contract updates are finalized.

COMIC
=====

As a special surprise, we wanted to share an early look at the original comic we have been producing behind the scenes titled: Wilder Origins. With Wilder World's rich history and backstory, the comic lends itself as a perfect way to start telling the Wilder World Lore and creation myth.

![](https://zine.wilderworld.com/content/images/2023/06/COMIC_Page01_dev_log01.jpeg)

![](https://zine.wilderworld.com/content/images/2023/06/Frame1.png)

![](https://zine.wilderworld.com/content/images/2023/06/Frame2.png)

![](https://zine.wilderworld.com/content/images/2023/06/Frame3.png)

![](https://zine.wilderworld.com/content/images/2023/06/Frame4.png)

![](https://zine.wilderworld.com/content/images/2023/06/Frame6.png)

The Wilder community is at the center of the Wilder experience. For that we would like to share some early frames of the comic to give a taste of what Wilder Origins wil bring. We currently have the first season arc mapped out (12 editions), with the first edition nearly completed (a 24 page comic). The goal is to tell the full Wilder backstory, introducing key characters and Wilder World assets through the duration of the first season until we arrive at the time that Wiami opens in OBR.

THE FUTURE
==========

### PRE-ALPHA GAMEPLAY TRAILER II

On July 31st we will release our second official pre-alpha gameplay trailer, which shows many of the locations outlined in this dev log and even a few more surprises.

### DEV LOG 2

We will continue our rhythm of quarterly dev logs with DL2 set to arrive at the end of Q3 2023. Our dev logs have introduced a sound structure across the Wider Game Studio that allows the team to be agile and focused for a sustained period with a clear process and public accountability. We have learned through iteration and have found the process with daily game studio scrums to closely track team progress, level performance and quickly address/unblock issues as they arise. This has enabled us to set ambitious milestones with a clear focus, while still introducing the opportunity to reflect and course correct our delivery plan.

### RACING ARCADE

The first experience we plan to roll out by the end of this year is the Wilder World Racing Arcade. This will be an initial test of our racing experience and be gated by an NFT-based Race Pass that will be air dropped to key community members. The exact details of this are still in development. Our main mission with this initiative is an early testing and community feedback phase, in advance of our wider public release in 2024.

### THE WILDERS

After the Racing Arcade we will be releasing the Wilders---our first full character PFP and custom avatar project---where you become the main character of Wilder World. There will be a total of 9,999 Wilders with a near infinite number of unique expressions.

CONCLUSION
----------

Now is the time to truly embark on this transformative journey with us. Not as a mere observer, but as a pioneer - a Wilder - breathing life into this immersive, photorealistic metaverse of Wilder World. With every step we take, every dev log we share, we continue to manifest our vision of a gaming utopia, blending the virtual and IRL of OBR like never before.

But we cannot do it alone. We need you - the community, the players, the dreamers and the contributors. Each one of you holds a unique key to Wilder World's ultimate potential. Your involvement is not just welcomed, it's integral. Your participation, your voice, and your engagement all contribute to the ever-evolving narrative of this vibrant, sprawling cityscape we call Wiami.

Seize this chance to transform your metaverse experience. Set your sights on the horizon, fire up your engines, and join us in weaving the fascinating tale of Wilder World. Together, let's bring Wiami to life, one block, one race, one quest, and one token at a time.

Now is the time to get wild. Are you ready?

*Updated on July 7th 2023*
