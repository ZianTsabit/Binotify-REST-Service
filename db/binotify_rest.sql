--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

-- Started on 2022-11-15 08:06:20 WIB

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 212 (class 1259 OID 23103)
-- Name: songs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.songs (
    song_id int NOT NULL,
    judul varchar(64) NOT NULL,
    penyanyi_id int NOT NULL,
    audio_path varchar(255) NOT NULL
);


ALTER TABLE public.songs OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 23102)
-- Name: songs_song_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.songs ALTER COLUMN song_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.songs_song_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 209 (class 1259 OID 23092)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id int NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    username varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    "isAdmin" boolean NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 23101)
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN user_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3485 (class 0 OID 23103)
-- Dependencies: 212
-- Data for Name: songs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.songs (song_id, judul, penyanyi_id, audio_path) FROM stdin;
1	Swear	2	https://drive.google.com/file/d/1zlUJDgYvruEbX504m8wyVCFC6Z5mGnKG/view?usp=share_link
2	Roman Picisan	2	https://drive.google.com/file/d/1MYUv_lX2eC7XqrGWDMKoagSViI9fea_P/view?usp=share_link
3	Kosong	2	https://drive.google.com/file/d/10EG4JvvzhG5hHwVfsSh3rNrHM0H78brc/view?usp=share_link
4	Kangen	2	https://drive.google.com/file/d/1UE9vUCUkwVKikhJ15vQ480AyEDpoE9O_/view?usp=share_link
5	Aku Cinta Kau Dan Dia	2	https://drive.google.com/file/d/1a-8z1n6g5iaNfa-aYZSEBXXNCRTLe_cP/view?usp=share_link
\.


--
-- TOC entry 3482 (class 0 OID 23092)
-- Dependencies: 209
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, email, password, username, name, "isAdmin") FROM stdin;
1	alifyasa@gmail.com	$2b$10$DqRETJN14e28/NXg3HLiC.AAD51KfNwGAuICGWZP.BBGlK9JwicG.	alifyasa	Muhammad Alif Putra Yasa	t
2	ahmaddhani123@gmail.com	$2b$10$ecVltzq6U9RsQy0X6D8bHer1wBi9MED.zTD0qozo/PQ7ia0jvevc2	AhmadD	Ahmad Dhani	f
3	johnlennon@gmail.com	$2b$10$6IJDDU8P32IUXXk/ix5ITuaiw1ctYnDoHr0uoTAZkFz7zYTUY6/Te	JohnLennon	John Winston Ono Lennon	f
4	paulmccartney@gmail.com	$2b$10$xMHv4BGBfRJQuNeEhX84pudPpcWfnKOeYojwCfmkmgSGmYE9cmsU.	PaulMacca	Paul McCartney	f
5	erk1945@gmail.com	$2b$10$BRjazl.0ebdPfFspMhJLOOZoOI4DHyLPyGaKgnlNwcbm8qxjCYwYi	EfekRumahKaca	Efek Rumah Kaca	f
6	kuntoaji123@gmail.com	$2b$10$qbeNlUkkq9anYsFjfLny9e9nzSOIOOEa0ZrY842VbigP4/YFv72Sq	KunsAji	Kunto Aji	f
\.


--
-- TOC entry 3491 (class 0 OID 0)
-- Dependencies: 211
-- Name: songs_song_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.songs_song_id_seq', 3, true);


--
-- TOC entry 3492 (class 0 OID 0)
-- Dependencies: 210
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_user_id_seq', 2, true);


--
-- TOC entry 3341 (class 2606 OID 23107)
-- Name: songs songs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.songs
    ADD CONSTRAINT songs_pkey PRIMARY KEY (song_id);


--
-- TOC entry 3337 (class 2606 OID 23100)
-- Name: users users_email_username_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_username_name_key UNIQUE (email, username, name);


--
-- TOC entry 3339 (class 2606 OID 23098)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- TOC entry 3342 (class 2606 OID 23108)
-- Name: songs penyanyi_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.songs
    ADD CONSTRAINT penyanyi_id FOREIGN KEY (penyanyi_id) REFERENCES public.users(user_id);


-- Completed on 2022-11-15 08:06:20 WIB

--
-- PostgreSQL database dump complete
--

