import hashlib
sha1 = hashlib.sha1()
data = "xiaojianbang"
sha1.update(data.encode('utf8'))
# sha1_data = sha1.hexdigest()
sha1_data = sha1.hexdigest()
print(sha1_data)
