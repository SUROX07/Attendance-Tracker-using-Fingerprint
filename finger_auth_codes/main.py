import cv2
import os
import requests
import datetime

# Using raw string to avoid escape sequence issues in file path
sample = cv2.imread(r"fing\altered\easy\19__M_Right_thumb_finger_Obl.BMP")

# Check if the image is read correctly
if sample is None:
    print("Error: Could not read the image file. Check the file path.")
else:
    # Resize the image if it is read correctly
    best_score = 0
    filename =None
    image =None
    kp1, kp2, mp = None, None, None
    counter = 1
    for file in [file for file in os.listdir("fing/real")]:
        fingerprint_image=cv2.imread(r"fing/real/"+file)
        sift = cv2.SIFT_create() 
        keypoints_1, descriptors_1 = sift.detectAndCompute(sample, None)
        keypoints_2, descriptors_2 = sift.detectAndCompute(fingerprint_image, None) 

        matches = cv2.FlannBasedMatcher({'algorithm':1, 'tree': 10},{}).knnMatch(descriptors_1, descriptors_2, k=2)

        match_points = []

        for p, q in matches:
            if p.distance < 0.5 * q.distance:
                match_points.append(p)
        
        keypoints =0
        if len(keypoints_1)<len(keypoints_2):
            keypoints=len(keypoints_1)
        else:
            keypoints=len(keypoints_2)
    
        if len(match_points)/keypoints*100>best_score:
            best_score = len(match_points)/keypoints*100
            filename = file.split('.')[0]
            image = fingerprint_image
            kp1 , kp2, mp = keypoints_1, keypoints_2, match_points

    print(best_score)
    if best_score>=75:

        # Sending attendance to server:
        url = "http://localhost:3000/api/students/increment-attendance"  
        response = requests.put(url, json={
            "studentID":filename,
            
        })

        try:
            if response.status_code == 200:
                print("Attendance updated successfully:", response.json())
                print('Best match: '+ str(filename))
                print('Score: '+ str(best_score))
                result = cv2.drawMatches(sample, kp1, image, kp2, mp, None)
                result = cv2.resize(result, None, fx=4, fy=4)
                cv2.imshow(filename, result)
                cv2.waitKey(0)
                cv2.destroyAllWindows()

            elif response.status_code == 404:
                print("Error: Student not found.")
            elif response.status_code == 400:
                print("Error: Bad request. Check the data format.")
            elif response.status_code == 500:
                print("Error: Internal server error.")
            else:
                print(f"Unexpected response {response.status_code}: {response.text}")
                print("Response from Node.js:", response.text)
        except requests.exceptions.RequestException as e:
            print(f"An error occurred: {e}")



    else:
        print('No match please try again')
        
         

