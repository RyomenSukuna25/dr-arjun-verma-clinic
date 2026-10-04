<?php if(session_status()===PHP_SESSION_NONE){session_start();} require_once __DIR__.'/data.php'; if(empty($_SESSION['csrf_token'])){$_SESSION['csrf_token']=bin2hex(random_bytes(32));} $basePath = $basePath ?? ''; $pageTitle = $pageTitle ?? 'Dr. Arjun Verma | Surgical Oncologist'; ?>
<!doctype html><html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#073b56"><meta name="color-scheme" content="light">
<title><?=htmlspecialchars($pageTitle)?></title>
<meta name="description" content="Dr. Arjun Verma — Surgical Oncology, laparoscopic and robotic cancer surgery. Explore surgical specialities, patient resources and consultation information.">
<meta name="robots" content="index,follow">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://images.unsplash.com"><link rel="preload" as="image" href="https://images.unsplash.com/photo-1551601651-09492b5468b6?auto=format&fit=crop&w=1800&q=78">
<link rel="icon" href="<?=$basePath?>assets/images/arjun-verma-clinic-logo.png">
<link rel="stylesheet" href="<?=$basePath?>assets/css/main.css"><link rel="stylesheet" href="<?=$basePath?>assets/css/animations.css">
</head><body>
<a class="skip-link" href="#main-content">Skip to content</a><div class="scroll-progress" id="scrollProgress"></div>
<div class="loader" id="loader"><div class="loader-brand"><img src="<?=$basePath?>assets/images/arjun-verma-clinic-logo.png" alt="Dr. Arjun Verma Clinic"></div><span>Preparing your care experience</span></div>
<div class="topbar"><div class="container topbar-inner"><div class="consulting"><span>DR. ARJUN VERMA</span><span>Surgical Oncology</span><span>Advanced • Minimally Invasive • Patient-Centred</span></div><div class="top-actions"><span>Appointments by enquiry</span><a href="<?=$basePath?>contact.php" class="top-book">Book Appointment <span>↗</span></a></div></div></div>
<header class="site-header" id="siteHeader"><div class="container nav-wrap">
<a class="brand" href="<?=$basePath?>index.php" aria-label="Dr. Arjun Verma home"><img class="logo-lockup" src="<?=$basePath?>assets/images/arjun-verma-clinic-logo.png" alt="Dr. Arjun Verma — Laparoscopic, Robotic & Surgical Oncology"></a>
<button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="mainNav"><span></span><span></span><span></span></button>
<nav class="main-nav" id="mainNav" aria-label="Primary navigation">
<a class="nav-link" href="<?=$basePath?>index.php">Home</a>
<a class="nav-link" href="<?=$basePath?>about.php">About</a>
<div class="nav-dropdown"><button class="nav-link dropdown-trigger" type="button" aria-expanded="false">Specialities <span>⌄</span></button><div class="dropdown-panel"><div class="dropdown-head"><div><span>ADVANCED CANCER CARE</span><strong>14 specialist pathways</strong></div><a href="<?=$basePath?>services.php">View all specialities →</a></div><div class="speciality-grid"><?php foreach($services as $i=>$s): ?><a href="<?=$basePath?>services/<?=$s['slug']?>.php"><i><?=sprintf('%02d',$i+1)?></i><span><?=htmlspecialchars($s['title'])?></span><b>↗</b></a><?php endforeach; ?></div></div></div>
<a class="nav-link" href="<?=$basePath?>locations.php">Locations</a><a class="nav-link" href="<?=$basePath?>reviews.php">Reviews</a><a class="nav-link" href="<?=$basePath?>blogs.php">Insights</a>
<div class="nav-dropdown media-dropdown"><button class="nav-link dropdown-trigger" type="button" aria-expanded="false">Media <span>⌄</span></button><div class="dropdown-panel mini-panel"><a href="<?=$basePath?>media/gallery.php">Clinic Gallery <b>↗</b></a><a href="<?=$basePath?>media/photos.php">Photos <b>↗</b></a><a href="<?=$basePath?>media/videos.php">Videos <b>↗</b></a></div></div>
<a class="nav-link" href="<?=$basePath?>contact.php">Contact</a><a class="nav-cta" href="<?=$basePath?>contact.php">Book Consultation <span>↗</span></a>
</nav></div></header>
<main id="main-content">
