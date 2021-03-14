## Inspiration
Cleaning your room, never gave you any benefits, **until now!** Also Blockchain and Machine Learning are taking over the world by storm. Why not use the new technologies for something that'll make our parents happy? **Clean your room and earn cryptocurrency!**

## What it does
**TiREN rewards REN token to people to clean their room**. It uses a machine learning model to take two pictures of a room :-
1. A messy room.
2. A clean room.

![TiREN Workflow](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/431/603/datas/original.jpg)

When the machine learning model evaluates that the same room was cleaned, it **rewards REN tokens** based on how much work would've been needed. **REN token can be swapped for ETH on Uniswap**.

![Uniswap Pool](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/431/596/datas/original.jpeg)

## How we built it
The very first step was to build a model that would help us in classifying whether a room is clean or not. For that we **created an image classification model using CNNs** using Keras and Tensorflow which helped us in classifying whether a room is clean or not. 

Simultaneously we **made our cryptocurrency** the REN ERC20 token. The token was then deployed to a Ropsten testnet and a **Uniswap pool was created to trade REN for ETH**.


 We then went on to make the main part of the project i.e. **the mobile application**. We built the app using React Native and then connected both the model and the app in order to make a complete working product.

## Challenges we ran into
1. Working with React Native for the first time was a major headache!
2. Creating a smart contract to reward REN token based on whether the room is clean or not was very challenging logically.
3. Connecting the ML model with the app.

## Accomplishments that we're proud of
1. Working with React Native for the first time.
2. Creating and deploying our own cryptocurrency.

## What we learned
1. How to make a mobile app.
2. Using web3 technology in a real world app.

## What's next for TiREN
1. The plan is to give the REN coins more concrete value.
2. Adding more tasks than just cleaning the room like studying, working out etc.
