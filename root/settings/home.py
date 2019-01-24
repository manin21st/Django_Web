from root.settings.base import *

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.oracle',
        'NAME': 'stlmpop1',
        'USER': 'preis',
        'PASSWORD': 'preis',
        'HOST': '118.38.159.9',
        'PORT': '1523',
    }
}
