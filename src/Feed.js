import React from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';

function Feed() {
    return (
        <div className="feed">
            {/* header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* tweetbox */}
            <TweetBox />
            {/* post */}
             <Post 
             displayName ="Mahammad Hassan"
             username="Hasshu_Hasan"
             verified={true}
             text = "sitara sirapadu sitarala sirapadu"
             avatar="https://instagram.fhyd14-2.fna.fbcdn.net/v/t51.2885-19/s150x150/124287600_2747533462125538_3030247874556366165_n.jpg?_nc_ht=instagram.fhyd14-2.fna.fbcdn.net&_nc_ohc=V6n9BfTBbkMAX_h4WZI&tp=1&oh=10b922fead230f8c0237a21d987f55f4&oe=601E74E4"
             image = "https://pbs.twimg.com/media/C-ovvX2WAAAIn08?format=png&name=360x360"
             />
             <Post 
             displayName ="Kajal Agarwal"
             username="kaju_aggu"
             verified={true}
             text = "Style ga undi kada nakuda nachindiii"
             avatar="https://i.pinimg.com/236x/70/07/d5/7007d55debc9fe123b85a751db56b13e.jpg"
             image = "https://i.pinimg.com/236x/6b/77/e7/6b77e71018e448d5257cd82c4ac6b0c5.jpg"
             />
             <Post 
             displayName ="Pooja Hegde"
             username="pooja_buttabomma"
             verified={true}
             text = "Maadam sirrrrrrrr maaaaadam aaaaanteyy "
             avatar="https://i.pinimg.com/236x/67/59/62/675962a38e81035a53da5e6e5d2da57c.jpg"
             image = "https://i.pinimg.com/236x/4d/a4/86/4da4862c5b7a664081f333c13f74d2f0.jpg"
             />
             <Post 
             displayName ="Raashi Khanna"
             username="Raashi_Loe"
             verified={true}
             text = "Yenni janmalu unaa na mitra vindaaa nveeeee"
             avatar="https://instagram.fhyd14-2.fna.fbcdn.net/v/t51.2885-19/s150x150/124287600_2747533462125538_3030247874556366165_n.jpg?_nc_ht=instagram.fhyd14-2.fna.fbcdn.net&_nc_ohc=V6n9BfTBbkMAX_h4WZI&tp=1&oh=10b922fead230f8c0237a21d987f55f4&oe=601E74E4"
             image = "https://i.pinimg.com/236x/5a/c4/a0/5ac4a06203c5d7c26b5b8a629daa1c5f.jpg"
             />
             <Post 
             displayName ="Anupama parameswaran"
             username="Anu_baby"
             verified={true}
             text = "Rowwwwwwwwwwwwwdyyyyy babbbbbbbbbyyyyyyy"
             avatar="https://instagram.fhyd14-2.fna.fbcdn.net/v/t51.2885-19/s150x150/124287600_2747533462125538_3030247874556366165_n.jpg?_nc_ht=instagram.fhyd14-2.fna.fbcdn.net&_nc_ohc=V6n9BfTBbkMAX_h4WZI&tp=1&oh=10b922fead230f8c0237a21d987f55f4&oe=601E74E4"
             image = "https://i.pinimg.com/236x/74/ff/a0/74ffa079ca27256647d324b1e8041f26.jpg"
             />
             <Post 
             displayName ="Kriti Sharma"
             username="Kritu_khana"
             verified={true}
             text = "Yenni janmalu unaa na mitra vindaaa nveeeee"
             avatar="https://i.pinimg.com/236x/06/1f/a3/061fa3b354fe50e4af2fa2f8abab6442.jpg"
             image = "https://i.pinimg.com/236x/d2/e7/91/d2e791b8a351ebf1c4e162d59378534e.jpg"
             />
            {/* post */}
            {/* post */}
            {/* post */}
            {/* post */}
        </div>
    );
}

export default Feed;
