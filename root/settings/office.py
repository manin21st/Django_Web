from root.settings.base import *

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.oracle',
        'NAME': 'stlmpop1',
        'USER': 'preis',
        'PASSWORD': 'preis',
        'HOST': '192.168.3.125',
        'PORT': '1521',
    }
}
