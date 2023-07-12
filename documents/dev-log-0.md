Wilders:

Welcome to the first-ever Wilder World dev log -- Dev Log 0 (DL0). DL0 is our first major gameplay update since releasing our [Pre-Alpha Gameplay Trailer](https://www.youtube.com/watch?v=SnFPK5nlR2Q&t=2s&ref=zine.wilderworld.com) (v0.1.14) 60 days ago. The TLDR is that things inside the Wilder Verse are heating up. In other words, LFG!

In DL0 we share the progress made on the latest version of Wilder World (v0.1.15); including major updates to Wheels, Wiami, and zSpace--the underlying technology that powers Wilder World's open metaverse. Many Wilders have asked for more consistent, tangible and detailed updates regarding the development progress of Wilder World. Dev Logs intend to give Citizens a raw, unfiltered, and behind-the-scenes look inside Wilder World. It won't all be beautiful, but will give Citizens a transparent view of exactly where we are at from a development perspective. Our victories, our challenges, and most importantly, our progress. No one said building the Metaverse would be easy; our intention is that Dev Logs create more shared-understanding and excitement regarding how truly ambitious and increasingly real Wilder World is.

Moving forward, Dev Logs will serve as an official ongoing record for key decisions, milestones, and obstacles encountered in the trenches, enabling Wilders to ride shotgun and provide feedback in a collective and distributed creative process. You will see a lot of unfinished business--things like ugly gray-boxed buildings, half completed shaders, undeveloped neighborhoods, vehicles without working lights, buggy gameplay and half-baked characters. The intention is not to show you the final and ultimate high fidelity look of Wilder World, but what the gameplay will feel like and how the overall city is progressing.

Let's dive in.

### RACING

Our primary focus right now is delivering a high quality, scalable and super fun gaming experience that enables Citizens to experience Wiami first hand. The good news is that we have made considerable progress on both the Wheels game as well as the metaverse itself (fully integrating the two into a single codebase). To illustrate progress, we felt it best to show a real race taking place near Little Meow, to give you an overall feel of the scale of the city, composition of the skyline and racing experience.

To deliver this, we recorded a heads up "practice" race between Frank and n3o's AI. To get to this milestone, we had to solve all of the challenges with a functioning racing game. Including but not limited to the ability to choose opponents, spawn a race, set the lap count & number of checkpoints, optimize vehicle handling & physics, AI traffic, creation of the track & assets, SFX, HUD and most of all, making it super fun to play.

![](https://zine.wilderworld.com/content/images/2023/03/Final-Edit-v4-2.png)

Vehicle handling was at the center of making it fun and able to run at a high frame rate for DL0. The team spent countless hours optimizing vehicle physics, ranging from the vehicle weight, torque, turning radius to speed ratio, steering sensitivity, camera spring arm and so on. In fact, we built an in-game tuning system that game designers and testers could use in real-time, without the need for recompiling from source. This decreased iteration time and enabled us to churn through thousands of tuning iterations.

Making something comparable to modern AAA racing games is much harder than one might imagine--there are literally thousands of things you need to nail to make the experience feel right. All of these areas are interdependent so it really becomes an art of trying to balance each variable. There is still a ways to go in order to perfect the vehicle physics, but for the first time we are truly happy with how the game feels and having a lot of fun playing internally. We know what we need to solve from here out and are not far away from making it next-level.

![](https://zine.wilderworld.com/content/images/2023/03/Final-Edit-v4-21-1.png)

Racing in Little Meow

Through interaction and play testing we gather valuable insights, which are then integrated into the development of Wheels Racing. With each sprint, we take the feedback and suggestions from the team and convert them into actionable tasks that help us improve urban planning and architecture, race track design, driving mechanics, procedural building generation, and landscape design. There are still a number of things required to make it feel as if the vehicle is moving fast, but we are not very far away from reaching parity with AAA racing games like Forza or NFS (from a racing perspective). Now that the core systems and game is working within Wilder World, each and every week we are experiencing considerable progress and improvement.

### WALPHA TRACK

![](https://zine.wilderworld.com/content/images/2023/03/NATURE_STRETCH_06.jpeg)

Track Concept

The Walpha Track is the first official race course within Wiami. The track acts as a central nervous system for The Island that can be extended and expanded to create different racing maps throughout the greater Wiami metropolis. The design of the track involves careful consideration of the concept, layout, visual design elements, interactivity, difficulty, and ambiance. We wanted the track to be a central part of Little Meow without overpowering the beauty and backdrop of the city. We wanted it to show the vast artistry and scale of Wiami. We also wanted it to feel futuristic, but natural and organic (sort of like a more evolved version of TRON).

![](https://zine.wilderworld.com/content/images/2023/03/WW_HIGHWAY_SKETCHES_25-1.jpeg)

Checkpoint Concept

![](https://zine.wilderworld.com/content/images/2023/03/4--1-.png)

Bridge Beam Concept

![](https://zine.wilderworld.com/content/images/2023/03/WW_HIGHWAY_SKETCHES_24-2.jpeg)

Track & Checkpoint 3D Models

The track is built using the principles of sacred geometry and utilizes an organic substructure that reinforces the idea of a natural, living and organic track suspended in the sky. The track moves out over the east beach and ocean, moves through the trinity towers, outside the perimeter of Little Meow and then back around through the midpoint of the island (near Trinity Edge). In total the track is approximately 5.5KM and takes about two minutes to complete at high speed in a Wambo. When vehicles interact with the track, a translucent material responds and lights the way. The track is composed of Plasmic Glass, a native Era 3 material that is light, tensile, translucent and giga-strong. The track enables racers to see the beauty of Wiami from being in the sky, as well as see the city directly through its transparent inner core. A benefit that comes with building in a virtual space is we can more easily and feasibly explore unorthodox materials, unbound by the constraining physics of OBR.

![](https://zine.wilderworld.com/content/images/2023/03/10.jpg)

Trinity Edge Concept

During the initial concept design phase, the holographic shaders and hyaline surface of the track felt a little like driving on an ice rink. To mitigate the slippery roadway and produce a tactile sense of grippiness and texture, we introduced the hexagonal patterns and added perpendicular rally lines, which also offered responsive haptics for the driver outside of an aesthetic appeal.

![](https://zine.wilderworld.com/content/images/2023/03/Screenshot-2023-03-31-0111461.png)

Track Details in Engine

In the process of the track build, we integrated 'distance fields' and 'proximity detectors' which make it so the track is responsive to objects in direct proximity to the surface. As part of bringing this component of the track to life, you'll notice an activated, glowing light beneath the vehicle driving on the roadway. Overall, the increased visibility when taking in the city scape offers a unique and unexpected view of the city that reflects light and shade in new and interesting ways.

![](https://zine.wilderworld.com/content/images/2023/03/30_03_2023_V7-2.png)

Track Shader

Initially, the first track was intended to be significantly more complex, with vertical loops, steeper corners, and more elevation. We simplified the first version so that we could really perfect one thing at a time, including putting more emphasis on core racing physics. Our next step will be to make the track more interesting by connecting into the vast roadway system of Wiami. This will create the shift from the expansive skyline of Wiami into the bustling streets of its inner core.

LITTLE MEOW
-----------

![](https://zine.wilderworld.com/content/images/2023/03/URBAN-PnANNING.png)

Little Meow

Wiami, the first major city in Wilder World, is a digital destination that offers an endless array of possibilities for exploration, creativity and skill development. The city is divided into two primary regions: The Island and The Mainland. The Mainland is an order of magnitude larger than the size of The Island (10x) and will be released as part of the second land sale. Little Meow is the first of nine neighborhoods in development on The Island. Each neighborhood is being fully urban planned and built out from the ground up, using Miami OSM (Open Street Map) data as a guide to increase fidelity and realism. We aren't building Wiami like a set in a movie or level in a traditional game. We have an entire team of architects and urban planning experts who are building it like you would build an actual city in the real world.

![](https://zine.wilderworld.com/content/images/2023/03/ActivationNode_Top1w.png)

![](https://zine.wilderworld.com/content/images/2023/03/ActivationNode_Top2.jpeg)

![](https://zine.wilderworld.com/content/images/2023/03/ActivationNode_EyeLevel2-1.jpeg)

![](https://zine.wilderworld.com/content/images/2023/03/ActivationNode_Top11.png)

Corridors & Gardens in Little Meow

Little Meow is situated at the southern tip of The Island. It is flanked by long white sand beaches to the west, south and east, coupled with expansive views of the ocean, the Trinity Islands and Wiami's core downtown area on The Mainland. For perspective, Little Meow is situated to the south east of where filming happened for the recent [Alpha Gameplay Teaser](https://www.youtube.com/watch?v=SnFPK5nlR2Q&t=2s&ref=zine.wilderworld.com) (0.1.14), an Era 2 area called *Trinity Edge*.

![](https://zine.wilderworld.com/content/images/2023/03/BUILD-OU3T---WIP.png)

Neighborhoods of the Island

Little Meow is a reimagination of the iconic South Beach area of Miami IRL. The new masterplan recalls the neighborhood identity, re-interprets its use and symbology with a new perspective of futurism and nature, which intends to create a home for native web3 living. Compared to its real world counterpart, the percentage of nature in Little Meow is purposely increased, building density is decreased, and primary towers rise higher. Design diversity is central to the identity of Little Meow and yet orchestrates a cohesive and iconic image of the neighborhood. Little Meow intends to be not only the first, but also the most vibrant and dynamic hub on The Island.

![](https://zine.wilderworld.com/content/images/2023/03/Wiami_Streets04.png)

![](https://zine.wilderworld.com/content/images/2023/03/Little-Meow-Concept-2.jpeg)

Little Meow Concepts

Little Meow is designed for OG Wilders. It is focused on increasing connection, commerce and collective experience:

- **Connection:**Public spaces, parks, artistic experiences, wellness facilities, book stores, cafes, racing clubs, museums and discos.
- **Commerce:** Shops, retail experiences and bazaars.
- **Collective Experience:**Stadiums, temples, theaters, and concert halls.

**Little Meow By The Numbers*:**

- **Buildings:** 755
- **Area:**9KM2
- **Max Population:**~9,000 Citizens
- **Building Families:** Minimum 8 per Era

**Building Heights:**

- **Low Rise Height:** 6m < 20m = 1 to 6 floors
- **MidRise Height:** 24m to 62m = 7 to 15 floors
- **High Rise Height:** 66m < 150m = 16 to 36 floors
- **Super Tall Height:** 154m < 306m = 37 to 75 floors
- **MegaTall Height:** 310m to 606m = 76 to 150 floors

*Please note that these numbers are approximate and subject to change.

![](https://zine.wilderworld.com/content/images/2023/03/download--3---1-.png)

Building Distribution in Little Meow

Avenues in Little Meow run North to South and will be named after early Wilder Citizens. Streets run East to West and are numbered like they are in Miami IRL (e.g., 5th Street) There are two exceptions to this rule: ***Little Meow Boulevard** - in Blue*, and ***Little Meow Road** in Grey (depicted below)*. These mark the most important streets in Little Meow.

![](https://zine.wilderworld.com/content/images/2023/03/download--4---1-.png)

Each neighborhood will have a distinct era assigned to different parts of the neighborhood urban plan, as depicted below. The zoning ratio between eras will change according to each neighborhood. Little Meow is being created with both a distinctive day and night time identity. It will have a balanced urban presence of 40% : 60%, for Era 2 and Era 3 respectively.

Little Meow Grid

Little Meow will follow a similar path to the diversity and character of Miami's South Beach neighborhood IRL. It will be distinctly oriented towards Entertainment, Art and Culture. The neighborhood is split into different activity areas, some of which will have a hybrid presence of use-cases:***District 1:** South Point Park; **District 2: **Technology District; **District 3:** Performance District; **District 4:** The Oceans Drive entertainment district; **District 5:** Shopping District; **District 6:**  Art District; **District 7:** Spiritual District; **District 8:** Sports District; **District 9:** Residencial District; **District 10:** The Lincoln Street, shopping District.*

![](https://zine.wilderworld.com/content/images/2023/03/POINTS-eOF-INTEREST---WIP.png)

Experience Zones in Little Meow

For those curious regarding [Wilder World's first Cribs drop,](https://app.wilderworld.com/market/cribs.wiami.southbeach.qube?ref=zine.wilderworld.com) The Qube is located in Little Meow's seaside front row, with a 240 degree view to the ocean and a west side view of the Wiami Mainland.  It is over 100 meters high and located at the junction of **14th Street and Ocean Dr** (with close proximity to the Walpha Race Track).

![](https://zine.wilderworld.com/content/images/2023/03/1-1.jpg)

Concept of the Seaside in Little Meow

Little Meow is currently at the **Level 2** stage of development. This means that design and planning work has been completed and that we are in the stages of deploying procedural systems to build the city out. In simple terms, Little Meow has entered the early stages of construction. As we complete each stage and sub-stage of development, new procedural systems are built to significantly simplify and speed up the creation of future neighborhoods and entire cities.

The development of each neighborhood on The Island uses a three-tier development status. We're still refining these levels, but here's a brief overview of how we see them now:

**Level 1:**

- Site analysis
- Design and allocation of OSM data
- Masterplan concept design
- Built vs. green areas
- Road and pedestrian networks
- Built skyline and building heights
- Plots and building footprints
- Allocation of building height distribution
- Designation of programmatic district
- Allocation of building landmarks per district
- Designation of the main boulevard area
- Manual vs. procedural areas
- Designation of eras and procedural families

**Level 2:**

- Early stages of procedural system development
- Usage for rapid in-game construction and prototyping
- 'Pushing the button' (more below)

**Level 3:**

- Represents the final stages of in-game construction, shaders, fidelity
- Being able to navigate a fully finished street or section of the city
- AAA gameplay quality

Keep in mind that images shared of Little Meow are low fidelity renders intended to give a feel of the shape, location and flow of buildings, rather than represent finished fidelity and photorealism.

Full 3D Blockout of Wiami

### \
GENERATING SYSTEMS

One of the benefits of thinking outside the boundaries of consensus reality is that it forces you to think beyond the conventional wisdom of how things are done. In the case of video games, things are still largely made by hand. This is one of the reasons why game studios require massive budgets and thousands of people to make a blockbuster hit. In order to build an IRL-scale virtual city we knew we would need to leverage procedural tech very early on. Simply building by hand, or with primitive procedural systems would be too labor intensive and also hit computational barriers in terms of mesh and polycount limits. Procedural tech and the recent advances in AI are a critical aspect of how we are delivering at mega scale (without thousands of artists). Creation algorithms exponentially scale the capacity of our artists, designers, and modelers by leveraging code. Building in a completely new way enables us to create far beyond what would be possible using traditional methods. This core thinking lives within our procedural team--the masterminds behind the recent [GENs drop](https://zine.wilderworld.com/a-mysterious-new-lifeform-analyzing-gens/) and BEINGs.

![](https://zine.wilderworld.com/content/images/2023/03/220912_Ortho_E02_Viz_01B.jpg)

![](https://zine.wilderworld.com/content/images/2023/03/220912_Ortho_E02_Viz_02B.jpg)

Procedurally Generated Era2 Buildings

GENs, or more precisely GENerators, represent the procedural systems, algorithms and AI that are constructing Wilder World. The process of building the GENs was a novel process compared to prior Wilder drops. Similar to Wilder Wheels having been the first large scale procedural 3D digital asset drop, GENs are the first large scale fully procedural, game ready digital asset drop (at least to our knowledge). Whereas Wheels were built using a fixed number of components that were systematically combined using a fixed set of single meshes, GENs are individually grown; all of their attribute traits contribute to the growth process and final outcome. No main part of the GEN is predetermined or manually made and so every GEN is entirely unique in form, even if the attribute trait values are the same. In this way the attribute traits are directly related to the GEN forming, as opposed to being an additive process or assembly because the body forming traits of a GEN defines the general size and amount of body parts a GEN has, but not the location and shape of those parts, which are left up to a controlled randomization. This creates individualized original shapes, without limiting frame rate or in-game performance. The bespoke generation process allows for greater photorealism, decreases the overall time to build, ensures game readiness, and significantly increases what is possible from a design perspective catering to true mass customization of game assets.

![](https://zine.wilderworld.com/content/images/2023/03/221108_Split_E03_Rendering_08-1.jpg)

![](https://zine.wilderworld.com/content/images/2023/03/221117_Braid_E03_AssemblyRender_03-1.jpg)

![](https://zine.wilderworld.com/content/images/2023/03/221115_Braid_E03_AssemblyRender-1.png)

Procedurally Generated Era3 Buildings

The GENs were an early test for a much larger idea; the generation of Wiami itself.  GENs utilizes many of the same principles and systems that have now been implemented to generate the actual city. The buildings, the roads, the sidewalks, the sewers, the street lights, the trees, the parks, the rivers, gardens and mountains. Unlike a normal city that is built by hand by manually moving 3D models around, Wiami is primarily being built using a complex set of integrated algorithms that improve daily. At every point of improvement the city is regenerated with the press of a button (yes, there is an actual button!). Every version is completely new and completely unique. A new dimension of reality is created with the press of a button.

![](https://zine.wilderworld.com/content/images/2023/03/230326_RacingDemo_Houdini_06.png)

![](https://zine.wilderworld.com/content/images/2023/03/230326_RacingDemo_Houdini_04.png)

Generating Little Meow in Houdini

To construct the city, the process begins with concepts, moves to building styles from different eras, and then builds generation systems within different architectural families. The generators create multiple sets of buildings that fit within specified architectural parameters and are then linked to different coordinates within the city (according to the urban plan). The following is a quick video of the building generators working in real-time.

Building Generator in Houdini

Our procedural generation pipeline--the entire pipeline from the map itself to what will be millions of unique objects--has continued to improve and is now being used to generate what you see in this latest gameplay demo almost entirely. The system allows for the creation of vast, complex environments quickly and efficiently. The result is a unique and interesting experience, with no two objects in the world ever being the same. This procedural system oversees terrain, roads, props, buildings, and their interactions while utilizing modular instancing systems that prevent GPU overload, while allowing infinite unique configurations within the world.

**The following is a quick video of the city being generated:**

Little Meow Generation in Houdini

By utilizing a system similar to AI prompting (with more constraints), we are able to obtain more specific results. The digital world provides a great platform for customization experimentation and has allowed us to test out the generation of one of a kind designs. We commonly use rules such as "style" and "performance" to guide our designs and create the organic results you experience in this dev log. The process is not linear. Correlation within the system is important and implementation allows for rapid development. As we generated the buildings shown in DL0, it was challenging to reduce the polygon counts of the procedurally generated Era 2 and Era 3 buildings due to the intricate details and dynamic curvature. The intelligent system design allows for hyper-scaled efficiency, mass customization, and enables us to scale our work in a meaningful way. The procedural framework allows for the entire organization to coordinate following a systemized process.

### CHARACTER PIPELINE

Our character systems and strategy has continued to progress. From a development perspective, our initial focus is and continues to be to develop characters from each era: Frank is from Era 1, n3o from Era 2, and our first female character will be from Era 3. As we are progressing through the eras we are defining a global style, lore, design language, and set of abilities that are present for characters from each time period. We are utilizing many of the same techniques between characters and working on an interactive character generation system that will enable anyone to create a completely unique avatar (without limiting performance and scale). This will be the basis for Wilder Avatars--our main PFP project that is currently underway (Code Name: "Wilders").

![](https://zine.wilderworld.com/content/images/2023/03/Frank_02.jpeg)

![](https://zine.wilderworld.com/content/images/2023/03/Frank_01.jpeg)

Frank Character v1

Unlike most PFP projects, we wanted Wilder Avatars to be truly unique, rather than needing to pick a single mascot (like a dog or monkey). People are unique and deserve to express themselves completely--after all, that is what the metaverse and web3 economy is all about. For this reason we took the hard route of building characters from the ground up, with the ultimate goal of enabling our community to create their own unique 3D avatars and rich personal lore.

The main goal of this sprint was to bring Frank Wilder to life and improve upon many of the initial systems used to create n3o. In this process we continued to improve the character systems including our standard base mesh and rig, as well as asset creation pipeline and socketing system. All of the practices applied to building Frank's character will serve as the foundation to continue to layer in more unique characters, accessories and wearables across a wide variety of character types. Eventually we will be able to create characters, fashion and accessories very similarly to how we are procedurally generating everything else inside Wilder World.

![](https://zine.wilderworld.com/content/images/2023/03/Unreal-Engine-5-Screenshot-2023.03.27---21.10.54.15-1.png)

In-Game Shot

Frank is from Era 1--a time in FBR during the late 80's and early 90's that was significantly more technologically advanced than OBR. You could say he is a bit ahead of his time. Frank is some combination of a bandit and retro street racer. He is also the first human in the Wilder World. For the time being Frank is wearing a helmet, but that is a temporary measure as the Wilder human pipeline is fully realized.

We started developing Frank's character with the iconic silhouette of the hat and mask, a core aspect of the Frank motif since 2012.  From there we built up his look, piece by piece, with the boots being the starting point for defining the design language of the character. We wanted to showcase his unique personality and flair. The patches on the Varsity Jacket are a visual scrapbook inspired by old totems made by Frank; a biography of symbols that have grown to become representative of Frank.

![](https://zine.wilderworld.com/content/images/2023/03/g94o6uqo5ivtsfoyl6zy--1-.png)

Patch Work

There are many different aspects of Frank's character and devices that are present in his outfit that are a central part of Wilder lore and have deep significance, which will make more sense as the core story is revealed.

### INTERFACE

A good portion of the Citizen HUD (Heads Up Display) is now complete. The HUD is an essential component created for Wilder World and will continue to evolve as the game expands to include new activities and experiences. The core functionality within the racing UI is mostly complete. The interface and aesthetic still has a way to go, but should improve significantly over the coming release. The goal is to make the HUD minimalist, intuitive, and futuristic.

![](https://zine.wilderworld.com/content/images/2023/03/Final-Edit-v4-2k.png)

Racing UI

Interface development is organized around three menu types: Menus, HUD, and Interactivity. Menus consist of "full-screen" menus, such as the starting game menu and pause game menu. The HUD includes information about what is vital to the player *right now*, such as where they are, the current time or temperature, or how far away a location is. In the future, the HUD will fully integrate Zero OS for encrypted messaging, decentralized social media, HD video & audio calling, DAO voting, NFT trading and AI, to fully connect anyone inside and outside of Wilder World. We believe this level of cross-connectivity inside Wilder World, within other Metaverses, and with the outside world greatly benefits Wilders and is not replicated easily. Interactivity includes the necessary interfaces to interact with in-world 3D objects and activities.

In this screen you can see additional data on top of the HUD, such as the race lap, race time, as well as an in-game leaderboard for who you are racing against. There are also animations for changing the state of a race, such as getting started and winning a race, as well as interfaces for things like Global Leaderboards.

![](https://zine.wilderworld.com/content/images/2023/03/Final-Edit-v4-2z.png)

Race Scoreboard

The goal with the interface design is to reduce the number of interactions needed, ultimately reducing resistance and creating a minimalist experience with maximum ease and beauty. Efficiency is key. The team has used Figma to create reusable design systems that stem from the HUD, including the map, character selector and creator screens, and login/signup screen. There is a lot of collaboration with the Zero team on creating a globally unified UI that is available inside and outside of the game, as well as accessible across mobile, web and VR.

### SOUNDS AND MUSIC

Sound is an integral aspect of any experience. Will Wright, the creator of the popular Sims games has said sound is 50% of the gaming experience. We could not agree more. We are investing significantly in building better sound systems, libraries and vibes. Wherever possible we create our own sounds; and are proud to have made all original music for what Wilder World has used to date.

![](https://zine.wilderworld.com/content/images/2023/03/Audio-Workflow-Black.png)

We find ourselves coming back to the natural sounds grounded in reality as the foundation for the sounds experienced within Wilder World. The track is made up of materials that do not exist in the real world, so there is a challenge to create the sound of driving on a unique material that is authentic and futuristic while retaining aspects of reality. The ambiance and sounds of nature, birds, water, the sounds of vehicles, and the sound of the character, are all important aspects that create a complex, realistic and immersive experience.

The sound of engines revving, tire screeching, and the natural environment heighten the excitement and intensity of the racing experience. The powerful sounds of the vehicle engine, changing gears, the wind against the vehicle as you drive faster and the sound change when you move the camera view combine together to enhance the visual experience and transport your auditory senses immediately into the race. We still have a long way to go, but our ultimate goal remains to make sounds as realistic as possible, using IRL as our benchmark.

![](https://lh4.googleusercontent.com/RIsqD17oJPAyN3HJBtMJLNkLrGuxRM-QQtnShFo6NZeCHeNSqDqOEDBzZZYhu449SuMzwrkaIZJPXzqnk8P-w9zB5mnX_b01_QXmhZOHaLX56wy9-kh6okg4yvxJtVm9NpjiEus-jyiaeUP3EFAHQ48)

Music has been applied to many different state variables like a player overtaking an opponent to take the first place, entering the final lap, nearing the end of the race, winning or losing, as well as car damages. Unlike a static piece of music, the sounds respond to all these states and events. Elements of futuristic trans-techno and synth wave frequencies are interwoven into the gameplay to create a totally unique sound experience. The music is broken into small chunks of musical messages that when put together, in any configuration, sound good. These sections of sound are added to the game logic and driven by the variables of the states and events. As an example, the sound bite that automatically plays during the first lap evolves into a more intense and exciting sound the moment the player enters their final lap.

![](https://zine.wilderworld.com/content/images/2023/03/Environment-Audio-Plan-Black.png)

A fresh and new sound that is futuristic yet familiar travels with you as you adventure around the track. Taking inspiration from frequencies found in nature and combining that with what exists in pop culture has shaped the sounds and music you hear throughout the gameplay experience. A symphony of solfeggio frequencies make up the soundscape within Wilder World that your ears may not hear, but your soul will. In this dev log, the sound and frequency of 598 hz and 432 hz can be heard, intentionally chosen to promote connection, growth and healing.

### THE FUTURE

This first milestone is an inaugural public race on the Walpha track for real stakes. We can't exactly commit to when this date will be, but we can tell you that it is almost ready and coming soon. Since the release of the gameplay demo on January 31st, the team has been fully committed to weekly sprints focused on developing the racing game and track. One of the core challenges throughout the development process has been communication, with team members in over 20 countries we are actively working to improve both our internal and external communication to keep up with the rapid growth of the Metaverse and the game studio. Many systems and teams have been implemented to aid in coordination, which is improving effectiveness week-over-week.

As we continue to work on the track and the overall advancement of Wiami, we will continue to share updates that provide insights into the development of the metaverse. With each dev log you will view the evolution of Wilder World and will have the opportunity to be part of the journey. With our collective energy focused, we move steadfast towards the *first playable* experience within Wilder World.

The future is meow.

Thank you Wilders.
