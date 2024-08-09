<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>News Website</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
    <header class="bg-gray-800 text-white">
        <!-- Top Bar -->
        <div class="flex justify-between items-center p-4 bg-gray-900">
            <div class="text-2xl font-bold">NewsCentral</div>
            <div class="flex-grow mx-4">
                <input type="text" placeholder="Search..." class="w-full px-4 py-2 rounded-md text-gray-900">
            </div>
            <div class="flex space-x-4">
                <a href="#" class="hover:underline">Login</a>
                <a href="#" class="hover:underline">Sign Out</a>
                <a href="#" class="hover:underline">My Profile</a>
            </div>
        </div>
        <!-- Navigation Bar -->
        <nav class="bg-gray-800">
            <div class="flex justify-center space-x-6 p-4">
                <a href="#" class="hover:text-gray-400">Home</a>
                <a href="#" class="hover:text-gray-400">World</a>
                <a href="#" class="hover:text-gray-400">Politics</a>
                <a href="#" class="hover:text-gray-400">Business</a>
                <a href="#" class="hover:text-gray-400">Technology</a>
                <a href="#" class="hover:text-gray-400">Sports</a>
                <a href="#" class="hover:text-gray-400">Entertainment</a>
                <a href="#" class="hover:text-gray-400">Opinion</a>
            </div>
        </nav>
        <!-- Breaking News Ticker -->
        <div class="bg-red-600 text-white text-center py-2 font-bold">
            Breaking News: Major Event Happening Now!
        </div>
    </header>
</body>
</html>

