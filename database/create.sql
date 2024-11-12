------------------- CREDENTIALS --------------
CREATE DATABASE Scannerdb;

USE Scannerdb;

CREATE TABLE User (
  userId INT PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(100),
  passwordHash VARCHAR(255),
  activeStatus VARCHAR(50),
  registrated DATETIME
);

CREATE TABLE Subscription (
  subscriptionId INT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2),
  duration INT
);

CREATE TABLE Payment (
  paymentId INT PRIMARY KEY,
  sum DECIMAL(10,2),
  paymentDate DATETIME,
  paymentMethod VARCHAR(50)
);

CREATE TABLE Feature (
  featureId INT PRIMARY KEY,
  name VARCHAR(100),
  description TEXT
);

CREATE TABLE UserSubscription (
  userSubscriptionId INT PRIMARY KEY,
  subscriptionId INT,
  userId INT,
  startDate DATETIME,
  endDate DATETIME,
  status VARCHAR(50),
  FOREIGN KEY (userId) REFERENCES User(userId),
  FOREIGN KEY (subscriptionId) REFERENCES Subscription(subscriptionId)
);

CREATE TABLE SubscriptionFeature (
  featureId INT PRIMARY KEY,
  subscriptionId INT,
  FOREIGN KEY (subscriptionId) REFERENCES Subscription(subscriptionId),
  FOREIGN KEY (featureId) REFERENCES Feature(featureId)
);

--! AFTER THAT NOT READY ---
---------------- SCANS ---------------------

CREATE TABLE Target (
  targetId INT PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  operatingSystem VARCHAR(255),
  createdAt DATETIME
);

CREATE TABLE ScanResult (
  scanResultId INT PRIMARY KEY,
  scanId INT,
  pluginId INT,
  scanId VARCHAR(50),
  status VARCHAR(50),
  discoveredAt DATETIME,
  FOREIGN KEY (scanId) REFERENCES ScanTarget(scanId),
  FOREIGN KEY (pluginId) REFERENCES ScanPlugin(pluginId)
);

CREATE TABLE ScanVulnerability (
  scanVulnerabilityId INT PRIMARY KEY,
  scanResultId INT,
  vulnerabilityId INT,
  FOREIGN KEY (scanResultId) REFERENCES ScanResult(scanResultId)
);

CREATE TABLE Vulnerability (
  vulnerabilityId INT PRIMARY KEY,
  scanResultId INT,
  cveName VARCHAR(50),
  description TEXT,
  dangerLevel VARCHAR(50),
  publishedAt DATETIME,
  FOREIGN KEY (scanResultId) REFERENCES ScanResult(scanResultId)
);

CREATE TABLE Report (
  reportId INT PRIMARY KEY,
  scanId INT,
  createdAt DATETIME,
  path VARCHAR(255),
  format VARCHAR(50)
);


CREATE TABLE ScanTarget (
  scanId INT PRIMARY KEY,
  targetId INT,
  startTime DATETIME,
  endTime DATETIME,
  scanType VARCHAR(255),
  status VARCHAR(50),
  FOREIGN KEY (targetId) REFERENCES Target(targetId)
);

CREATE TABLE ScanPlugin (
  pluginId INT PRIMARY KEY,
  name VARCHAR(255),
  version VARCHAR(50),
  description TEXT
);





CREATE TABLE AuditLog (
  logId INT PRIMARY KEY,
  userId INT,
  scanId INT,
  time DATETIME,
  action VARCHAR(50),
  FOREIGN KEY (userId) REFERENCES User(userId),
  FOREIGN KEY (scanId) REFERENCES Scan(scanId)
);

CREATE TABLE Scan (
  scanId INT PRIMARY KEY,
  targetId INT,
  startTime DATETIME,
  endTime DATETIME,
  scanType VARCHAR(255),
  status VARCHAR(50),
  FOREIGN KEY (targetId) REFERENCES Target(targetId)
);

CREATE TABLE UserScans (
  id INT PRIMARY KEY,
  userId INT,
  scanId INT,
  FOREIGN KEY (userId) REFERENCES User(userId),
  FOREIGN KEY (scanId) REFERENCES Scan(scanId)
);

CREATE TABLE Plugin (
  pluginId INT PRIMARY KEY,
  name VARCHAR(255),
  version VARCHAR(50),
  description TEXT
);

CREATE TABLE Solution (
  solutionId INT PRIMARY KEY,
  description TEXT,
  solid BOOLEAN
);

CREATE TABLE VulnerabilitySolution (
  vulnerabilitySolutionId INT PRIMARY KEY,
  vulnerabilityId INT,
  solutionId INT,
  solid BOOLEAN,
  FOREIGN KEY (vulnerabilityId) REFERENCES Vulnerability(vulnerabilityId),
  FOREIGN KEY (solutionId) REFERENCES Solution(solutionId)
);

