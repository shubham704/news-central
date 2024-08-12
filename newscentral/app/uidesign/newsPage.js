
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>News Article</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .header h1 {
            font-size: 36px;
            color: #333;
        }
        .author-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }
        .author-info div {
            color: #555;
        }
        .author-info img {
            border-radius: 50%;
            width: 50px;
            height: 50px;
        }
        .article-image {
            width: 100%;
            height: auto;
            margin-bottom: 20px;
            border-radius: 10px;
        }
        .article-content {
            font-size: 18px;
            line-height: 1.6;
            color: #333;
        }
        .article-content h2 {
            font-size: 28px;
            margin-top: 20px;
            color: #555;
        }
        .share-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 0;
        }
        .share-buttons {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .share-buttons a {
            display: inline-block;
            margin: 0 10px;
            text-decoration: none;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            font-size: 16px;
        }
        .share-facebook {
            background-color: #3b5998;
        }
        .share-twitter {
            background-color: #1da1f2;
        }
        .share-linkedin {
            background-color: #0077b5;
        }
        .share-btn {
            position: relative;
            background-color: #555;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        .share-menu {
            display: none;
            position: absolute;
            top: 40px;
            left: 0;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            z-index: 100;
            text-align: left;
        }
        .share-menu a {
            display: block;
            padding: 10px 15px;
            color: #555;
            text-decoration: none;
        }
        .share-menu a:hover {
            background-color: #f4f4f4;
        }
        .related-articles {
            margin-top: 40px;
        }
        .related-articles h3 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #333;
        }
        .related-articles ul {
            list-style: none;
            padding: 0;
        }
        .related-articles ul li {
            margin-bottom: 10px;
        }
        .related-articles ul li a {
            text-decoration: none;
            color: #007bff;
        }
        .related-articles ul li a:hover {
            text-decoration: underline;
        }
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            text-align: center;
            color: #777;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h1>Article Title: The Impact of Technology on Society</h1>
    </div>

    <div class="author-info">
        <div>
            <strong>By John Doe</strong><br>
            Published on August 9, 2024
        </div>
        <img src="https://via.placeholder.com/50" alt="Author Image">
    </div>

    <img src="https://via.placeholder.com/800x400" alt="Article Image" class="article-image">

    <div class="share-container">
        <button class="share-btn">Share</button>
        <div class="share-menu">
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com/article" target="_blank">Share on Facebook</a>
            <a href="https://twitter.com/intent/tweet?text=Check out this article!&url=https://yourwebsite.com/article" target="_blank">Share on Twitter</a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://yourwebsite.com/article" target="_blank">Share on LinkedIn</a>
        </div>
    </div>

    <div class="article-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Sed sit amet facilisis urna. Praesent ac magna justo. Nullam posuere, nisl vel imperdiet bibendum, lectus lectus pellentesque orci, ac maximus nisi justo in urna. Nullam at varius metus. Curabitur facilisis risus nec risus auctor, id viverra metus vulputate.</p>

        <h2>Introduction</h2>
        <p>Sed a finibus justo, eget consectetur erat. Suspendisse in suscipit justo. Aliquam luctus id elit at sollicitudin. Sed quis tincidunt nisi, a vestibulum dolor. Aliquam erat volutpat. Curabitur laoreet, lorem a vulputate aliquam, odio sapien facilisis mauris, ac facilisis velit elit nec risus.</p>

        <h2>Main Content</h2>
        <p>Quisque posuere, magna non scelerisque interdum, quam metus fermentum metus, at imperdiet libero urna nec purus. In sit amet erat et metus laoreet pulvinar non nec nisi. Ut euismod egestas magna ac pharetra. Vivamus elementum, arcu sit amet commodo ullamcorper, ligula ipsum tempus elit, ut pretium ex orci eu magna.</p>

        <h2>Conclusion</h2>
        <p>Donec auctor, sapien at consectetur sagittis, risus elit fermentum quam, non tincidunt mauris est vel felis. Curabitur venenatis leo sed turpis fringilla, sit amet interdum tortor fermentum. Nulla sit amet consectetur sapien, sed bibendum lorem. Phasellus at lacus urna. Aliquam erat volutpat. Fusce nec odio sed orci consectetur consequat.</p>
    </div>

    <div class="related-articles">
        <h3>Related Articles</h3>
        <ul>
            <li><a href="#">How Artificial Intelligence is Changing the World</a></li>
            <li><a href="#">The Future of Renewable Energy</a></li>
            <li><a href="#">Advancements in Healthcare Technology</a></li>
            <li><a href="#">The Role of Social Media in Modern Society</a></li>
        </ul>
    </div>

    <div class="footer">
        &copy; 2024 News Website. All rights reserved.
    </div>
</div>

<script>
    document.querySelector('.share-btn').addEventListener('click', function() {
        var shareMenu = document.querySelector('.share-menu');
        shareMenu.style.display = shareMenu.style.display === 'block' ? 'none' : 'block';
    });
    document.addEventListener('click', function(event) {
        var isClickInside = document.querySelector('.share-container').contains(event.target);
        if (!isClickInside) {
            document.querySelector('.share-menu').style.display = 'none';
        }
    });
</script>

</body>
</html>
