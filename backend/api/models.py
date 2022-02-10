from django.db import models

# Create your models here.


class Category(models.Model):

    title = models.CharField(max_length=100)
    parent = models.ForeignKey("self", null=True, blank=True,
                               related_name="subcategories", on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "segment categories"

    def __str__(self):
        return self.title


class AudioFile(models.Model):
    name = models.CharField(max_length=150, blank=False,
                            verbose_name='audio name', help_text='audio file label')
    file_type = models.CharField(
        max_length=10, blank=False, verbose_name='audio type', help_text='audio type label')
    sampleRate = models.IntegerField(
        blank=False, verbose_name='audio sampleRate', help_text='audio sampleRate label')
    length = models.IntegerField(
        blank=False, verbose_name='audio length', help_text='audio length label')
    duration = models.FloatField(
        blank=False, verbose_name='audio duration', help_text='audio duration label')
    numberOfChannels = models.IntegerField(
        blank=False, verbose_name='audio numberOfChannels', help_text='audio numberOfChannels label')
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'audio_file'
        verbose_name = 'audio file'
        verbose_name_plural = 'audio files'

    def __str__(self):
        return '[%s] %s' % (self.id, self.name)

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        super(AudioFile, self).save(force_insert,
                                    force_update, using, update_fields)


class Segment(models.Model):
    color = models.CharField(max_length=50, blank=False,
                             verbose_name='audio segment color', help_text='audio segment color label')
    ini = models.FloatField(
        blank=False, verbose_name='audio segment ini', help_text='audio segment ini label')
    end = models.FloatField(
        blank=False, verbose_name='audio segment end', help_text='audio segment end label')
    width = models.FloatField(
        blank=False, verbose_name='audio segment width', help_text='audio segment width label')
    comment = models.TextField(
        blank=True, verbose_name='segment comment', help_text='segment comment label')
    audio = models.ForeignKey(AudioFile, on_delete=models.CASCADE,
                              verbose_name='audio clip', help_text='select audio clip')
    category = models.ForeignKey(Category, on_delete=models.CASCADE,
                                 related_name='+', verbose_name='category', help_text='select category')
    sub_category = models.ForeignKey(Category, on_delete=models.CASCADE,
                                     related_name='+', verbose_name='subcategory', help_text='select subcategory')

    class Meta:
        db_table = 'audio_segment'
        verbose_name = 'audio segment'
        verbose_name_plural = 'audio segments'

    def __str__(self):
        return '[%s] %s' % (self.id, self.color)

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        super(Segment, self).save(force_insert,
                                  force_update, using, update_fields)
