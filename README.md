# Binotify REST Service

## 1. Deskripsi

Binotify REST Service adalah sebuah service yang dibuat dengan menggunakan NodeJS dan framework ExpressJS yang digunakan untuk melakukan
proses autentikasi Binotify Premium App, pengelolaan lagu premium, akses list penyanyi, dan akses lagu dari seorang penyanyi pada sisi backend. Database yang digunakan pada REST Service ini adalah PostgreSQL. Proses autentikasi pada service ini diimplementasikan dengan menggunakan JWT (Json Web Token). 

## 2. Requirements

 - [Docker](https://docs.docker.com/get-docker/)
 - Node Js
 - Postgre SQL
 - Sequelize

## 3. How to Install

### Docker

[Download and Install Docker](https://docs.docker.com/get-docker/)

## 4. How to Run Server

```bash
docker compose up --build
```

*Flag* `--build` berfungsi untuk mem-*build image* sebelum eksekusi. Ini dilakukan supaya perubahan yang terjadi pada kode direfleksikan ke hasil tes. Tambahkan *flag* `--detach` untuk *run* di *background*.

 - *url*: `localhost:3001`

## 5. Endpoint

Berikut adalah endpoint yang ada di Binotify REST Service:
### 5.1. Login

- POST `localhost:3001/user/login`

### 5.2. Register

- POST `localhost:3001/user/register`

### 5.3. List Penyanyi

- GET `localhost:3001/user/musician`

### 5.4. List Lagu dari Penyanyi 

- GET `localhost:3001/song/penyanyi/:penyanyiId`

### 5.5. CRUD Lagu Premium

- Create: POST `localhost:3001/song/`
- Read: GET `localhost:3001/song/:songId`
- Update: PUT `localhost:3001/song/:songId`
- Delete: DELETE `localhost:3001/song/:songId`

## 6. Pembagian Tugas

| Fitur  | 13520004 | 13520135 | 13520165 |
| --- | --- | --- | --- |
| Database |  |  | :white_check_mark: |
| Autentikasi Pengguna |  |  | :white_check_mark: |
| Pengelolaan Lagu Premium |  |  | :white_check_mark: |
| Endpoint List Penyanyi |  |  | :white_check_mark: |
| Endpoint List Lagu dari Penyanyi |  |  | :white_check_mark: |
| Docker  |  |  | :white_check_mark: |

## 7. Anggota Kelompok

| Nama  | NIM |
| --- | --- |
| Gede Prasidha Bhawarnawa | 13520004 |
| Muhammad Alif Putra Yasa   | 13520135 |
| Ghazian Tsabit Alkamil   | 13520165 |

## 8. Credential First Users

### 1. User
    - username: AhmadD
    - password: AhmadD123

### 2. Admin
    - username: alifyasa
    - password: alifyasa123