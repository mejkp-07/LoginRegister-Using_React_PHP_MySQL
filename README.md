
# How to Run this Project

### This Project is made using React (Frontend) and PHP (Backend) by connecting it with MySQL Database.


## Clone the Project
```bash
git clone https://github.com/mejkp-07/LoginRegister-Using_React_PHP_MySQL.git
```
## Go inside this Project

```bash
cd LoginRegister-Using_React_PHP_MySQL
```

 ## Install Packages

```bash
npm install
```

 ## Run the React Frontend

```bash
npm start
```
 ## View Project in Browser
```bash
http://localhost:3000/
```

## Run the PHP Backend

1. **Download and Install XAMPP**
   - Download XAMPP from [here](https://www.apachefriends.org/download.html).
   - Follow the installation instructions on the website.

2. **Copy `insert.php` File**
   - Locate the `insert.php` file.
   - Copy the file and paste it in `C:\xampp\htdocs`.

3. **Start Apache Server**
   - Open the XAMPP Control Panel.
   - Start the Apache Server.

## Notes

- `insert.php` accesses the MySQL server running locally. It executes a query to save data in the database when you register someone from the UI (frontend). Therefore, your local MySQL server should be running. So, it is acting as a bridge between frontend and backend. You can see your server running status from "Services" in Start menu.
- You can see the changes after registering from MySQL Workbench (it is used to manage our database). 

**Remember:** 
- Create a `Register` table with the required schema before saving your data or executing your PHP file.

### Important Note

If you have any problem in running fronend (npm start) then there must be conflict between the packages you have installed. To resove it you can run:-
```bash
npm audit fix
```
```bash
npm audit fix --force
```

