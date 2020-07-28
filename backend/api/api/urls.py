"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static
from django.views.generic import TemplateView
from rest_framework import routers
from core import views
from rest_framework_extensions.routers import NestedRouterMixin
from . import settings



class NestedDefaultRouter(NestedRouterMixin, routers.DefaultRouter):
    pass

v1_router = NestedDefaultRouter()
v1_router.register(r'profile', views.ProfileViewSet)
v1_router.register(r'doctor', views.DoctorViewSet)
v1_router.register(r'patient', views.PatientViewSet)
v1_router.register(r'appointment', views.AppointmentViewSet)

admin.site.site_header = 'Ledger admin'
admin.site.site_title = 'Ledger admin'
admin.site.index_title = 'Ledger administration'
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(v1_router.urls)),
    path('api/auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('docs/', TemplateView.as_view(template_name="index.html"))
    ] +  static(settings.STATIC_URL)
