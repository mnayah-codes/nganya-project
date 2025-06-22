import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import "../styles/bloggers.css";

const bloggers = [
  { platform: "Instagram", username: "@matatugalore", link: "https://instagram.com/matatugalore" },
  { platform: "Instagram", username: "@nganya_kenya", link: "https://instagram.com/nganya_kenya" },
  { platform: "Instagram", username: "@a.l.p.h.a.h.g.r.a.m", link: "https://instagram.com/a.l.p.h.a.h.g.r.a.m" },
  { platform: "Instagram", username: "@matwananation", link: "https://instagram.com/matwananation" },
  { platform: "Instagram", username: "@manyanga_kenya", link: "https://instagram.com/manyanga_kenya" },
  { platform: "TikTok", username: "@nairobi_matatuculture", link: "https://tiktok.com/@nairobi_matatuculture" },
  { platform: "TikTok", username: "@raptorfam-ke", link: "https://tiktok.com/@raptorfam-ke" },
  { platform: "TikTok", username: "@Matatu World", link: "https://tiktok.com/@matatu.world" },
  { platform: "TikTok", username: "@Ma3 Ni Sisi", link: "https://tiktok.com/@ma3nisisi" },
  { platform: "TikTok", username: "@ONCE AGAIN", link: "https://tiktok.com/@on.dial01" },
];

const BloggerSection = () => {
  const instagramBloggers = bloggers.filter(b => b.platform === "Instagram");
  const tiktokBloggers = bloggers.filter(b => b.platform === "TikTok");

  return (
    <div className="blogger-section">
      <h2>Popular Bloggers Covering Matatu Culture</h2>
      <p className="blogger-description">To checkout more crazy stunts and the bashments happening in the nairobi matatus checkout these tiktok and instagram pages.</p>
      <div className="blogger-columns">
        <div className="platform-section instagram-section">
          <h3> Instagram</h3>
          {instagramBloggers.map((blogger, i) => (
            <a
              key={i}
              href={blogger.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blogger-card instagram"
            >
              <FaInstagram className="icon" />
              <p>{blogger.username}</p>
            </a>
          ))}
        </div>

        <div className="platform-section tiktok-section">
          <h3>TikTok</h3>
          {tiktokBloggers.map((blogger, i) => (
            <a
              key={i}
              href={blogger.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blogger-card tiktok"
            >
              <FaTiktok className="icon" />
              <p>{blogger.username}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloggerSection;