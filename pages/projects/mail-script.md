---
title: Automate PDF Manipulation and Email tasks w/AppleScript
date: 2023/11/29
description: Automated PDF manipulation and Email tasks using a combination of AppleScript and Shell Scripting.
tag: scripts
author: You
---

## Mail Script Project - Improve Your Productivity!
This project provides a streamlined solution for manipulating and 
sending PDFs via email, offering both standalone applications and 
individual scripts for more flexible use.

## To Check It Out On GitHub:
[Mail Script Repo](https://github.com/ccrawford4/Mail-Script)


## Files
1. **Mail-Script.app:** The main application that incorporates the `Mail.scpt` script. It 
automates the installation process for Homebrew and qpdf if not already present on the
user's system. When a PDF is dropped onto it, the script splits the PDF based on the
desired range and sends the resulting files to a specified recipient with the subject
text being the parent PDF's name.

2. **One_PDF.app:** A standalone application utilizing One.scpt. It allows users to drop a
single PDF onto the application, which is then sent automatically to a specified recipient 
using the Apple Mail client.

3. **Two_PDF.app:** Another standalone application using Two.scpt. Users can drop two 
PDFs onto this application, and it will create an email with the subject text being the 
name of the first PDF and send it to one recipient while cc'ing two others.

4. **Mail.scpt:** The script corresponding to the main functionality in `Mail.scpt`. 
Users can directly use this script if they prefer not to use the application.

5. **One.scpt:** The script for the One_PDF.app application, offering a more specific
functionality for handling a single PDF.

6. **Two.scpt:** The script for the Two_PDF.app application, focusing on the handling
of two PDFs with specific email composition.

## Usage
### Using Applications
1. Mail-Script.app
- Drag and drop a PDF onto the application.
- Follow the prompts to set the desired range and recipient. 
- The script will split the PDF and send the segments via email.
2. One_PDF.app
- Drag and drop a single PDF onto the application.
- The script will automatically send the PDF to a specified recipient.
3. Two_PDF.app
- Drag and drop two PDFs, one after the other, onto the application.
- The script will create an email with the subject text from the first PDF's name.
- Send the email to one recipient and cc two others.

### Customize to Your Use-Case:
#### Customize E-Mail Format
```applescript
on open droppedPDFs
  -- Set your own recipient and cc addresses... and add as many as you want!
  set recipientAddress to "<put recipient address here>"
  set senderAddress to "<put sender address here>"
  set ccAddress to "<put cc address here>"

  -- Set your own subject text
  set subjectText to "This is my example subject text"
  tell application "Mail"
    set newMessage to make new outgoing message with properties {subjectText:subjectText, visible:true, sender:senderAddress}
    -- Change these to adjust who you want to send it to as well as how many people
    make new cc recipient at end of cc recipients with properties {address:ccAddress}
    make new to recipient at end of to recipients with properties {address:recipientAddress}

    -- Add dropped pdfs as attachments or customize the path to get from a desired folder
    repeat with aPDF in droppedPDFs
      set pdfPath to (POSIX path of aPDF)
      make new attachment with properties {file name:pdfPath}
    end repeat
  end tell
end open
```
#### Convert Different Types of Files to PDF
```applescript
on open droppedPDFs
  repeat with aPDF in droppedPDFs
    -- Save converted pdfs to a folder of your choice! (Change folder path below)
    set folderPath to "/Users/example/Desktop/exampleFolder"

    set inPath to (POSIX path of aFile)
    set fileName to (name of info for (aPDF))

    -- Get rid of .pdf, .doc, .png, etc extension --> can customize for other file types like .docx
    set baseName to text 1 thru -5 of fileName

    set newPath to POSIX path of (folderPath) & "/" & baseName & ".pdf"

    do shell script "cp " & quoted form of inPath & " " & quoted form of newPath
  end repeat
end open
```
### Using Scripts
- Users who prefer script-based interactions can use the corresponding `.scpt` files
- Run the desired script using the AppleScript runner or terminal commands
- If interested in customizing application capabilities: consider editing the script to
your liking and then export it into an application

## Requirements
- MacOSX
