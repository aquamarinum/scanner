CREATE DATABASE Scannerdb;

USE Scannerdb;

CREATE TABLE Users (
  userId INT PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(100),
  passwordHash VARCHAR(255),
  activeStatus VARCHAR(50) default 'active',
  registrated DATETIME default current_timestamp
);

CREATE TABLE Subscriptions (
  subscriptionId INT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2),
  duration INT
);

CREATE TABLE Payments (
  paymentId INT PRIMARY KEY,
  sum DECIMAL(10,2),
  paymentDate DATETIME,
  paymentMethod VARCHAR(50)
);

CREATE TABLE Features (
  featureId INT PRIMARY KEY,
  name VARCHAR(100),
  description TEXT
);

CREATE TABLE UserSubscriptions (
  userSubscriptionId INT PRIMARY KEY,
  subscriptionId INT,
  paymentId INT,
  userId INT,
  startDate DATETIME,
  endDate DATETIME,
  status VARCHAR(50),
  FOREIGN KEY (userId) REFERENCES Users(userId),
  FOREIGN KEY (subscriptionId) REFERENCES Subscriptions(subscriptionId),
  FOREIGN KEY (paymentId) REFERENCES Payments(paymentId)
);

CREATE TABLE SubscriptionFeatures (
  featureId INT,
  subscriptionId INT,
  FOREIGN KEY (subscriptionId) REFERENCES Subscriptions(subscriptionId) 
  on delete cascade
  on update cascade,
  FOREIGN KEY (featureId) REFERENCES Features(featureId)
  on delete cascade
  on update cascade
);

--------- -----------------------------------------------------------

CREATE TABLE Scans (
  scanId INT PRIMARY KEY,
  userId INT,
  startTime DATETIME,
  endTime DATETIME,
  scanType VARCHAR(255),
  status VARCHAR(50),
  foreign key (userId) references Users(userId)
);

CREATE TABLE Targets (
  targetId INT PRIMARY KEY,
  scanId INT,
  name VARCHAR(100),
  hostname VARCHAR(50),
  operationSystem VARCHAR(100),
  createdAt DATETIME default current_timestamp,
  foreign key (scanId) references Scans(scanId) 
  on delete cascade on update cascade
);

CREATE TABLE AuditLogs (
  logId INT PRIMARY KEY,
  scanId INT,
  time DATETIME,
  action VARCHAR(50),
  FOREIGN KEY (scanId) REFERENCES Scans(scanId)
  on delete cascade
  on update cascade
);

CREATE TABLE Reports (
  reportId INT PRIMARY KEY,
  scanId INT,
  createdAt DATETIME,
  path VARCHAR(255),
  format VARCHAR(50),
  FOREIGN KEY (scanId) REFERENCES Scans(scanId)
  on delete cascade on update cascade
);

CREATE TABLE Plugins (
  pluginId INT PRIMARY KEY,
  name VARCHAR(100),
  version VARCHAR(50),
  description TEXT
);

CREATE TABLE ScanPlugins (
  pluginId INT,
  scanId INT,
  FOREIGN KEY (pluginId) REFERENCES Plugins(pluginId),
  FOREIGN KEY (scanId) REFERENCES Scans(scanId)
);

CREATE TABLE Vulnerabilities (
  vulnerabilityId INT PRIMARY KEY,
  cveName VARCHAR(50),
  description TEXT,
  dangerLevel INT,
  publishedAt DATETIME
);

CREATE TABLE ScanVulnerabilities (
  scanId INT,
  vulnerabilityId INT,
  FOREIGN KEY (scanId) REFERENCES Scans(ScanId),
  FOREIGN KEY (vulnerabilityId) REFERENCES Vulnerabilities(vulnerabilityId)
);

CREATE TABLE Solutions (
  solutionId INT PRIMARY KEY,
  description TEXT
);

CREATE TABLE VulnerabilitySolutions (
  vulnerabilityId INT,
  solutionId INT,
  FOREIGN KEY (vulnerabilityId) REFERENCES Vulnerabilities(vulnerabilityId),
  FOREIGN KEY (solutionId) REFERENCES Solutions(solutionId)
);