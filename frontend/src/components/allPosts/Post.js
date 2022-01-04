import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/10596304/pexels-photo-10596304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="PostImage"
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Music</span>
          <span className="postCategory">Life</span>
        </div>
        <span className="postTitle">স্বাধীনতা – তাপস ঠাকুর</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        যদি আমার একক পৃথিবী ভেসে যায় কোনদিন জনতার জোয়ারে , তবে শহরের আনাচে
        কানাচে প্রতিটি রাস্তায় প্রতিটি প্রানে, বিশাল অক্ষরে। তোমাদের প্রিয়
        কবিতাটি আমি লিখে দিয়ে যাব !! যার নাম- স্বাধীনতা। যদি আমার একক পৃথিবী
        ভেসে যায় কোনদিন জনতার জোয়ারে , তবে শহরের আনাচে কানাচে প্রতিটি রাস্তায়
        প্রতিটি প্রানে, বিশাল অক্ষরে। তোমাদের প্রিয় কবিতাটি আমি লিখে দিয়ে যাব !!
        যার নাম- স্বাধীনতা।
      </p>
    </div>
  );
}
