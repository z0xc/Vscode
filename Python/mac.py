import hmac
message = b'87654321'
key = b'xiaojianbang'
h = hmac.new(key, message, digestmod='MD5')
# 如果消息很长，可以多次调用h.update(msg)
print(h.hexdigest())